import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-notifications-component/dist/theme.css'
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";
import { useTranslation } from "react-i18next";
import NavBar from "./app/components/NavBar";
import Sidebar from "./app/components/Sidebar"
import {Footer} from "./app/components/Footer";

function App() {

	const [isAuthenticated, userHasAuthenticated] = useState(false);
	const [isAuthenticating, setIsAuthenticating] = useState(true);
	const history = useHistory();
	const { t } = useTranslation();

	useEffect(() => {
		onLoad();
	}, []);

	async function onLoad() {
		try {
			if (localStorage.getItem("jwtoken")) {
				// TODO set client-side expiry for this token
				userHasAuthenticated(true);
			}
			const windowUrl = window.location.search;
			const params = new URLSearchParams(windowUrl);
			if( params.has("roleToken")) {
				const roleToken = params.get("roleToken");
				console.log("Web App started with roleToken = "+roleToken)
			}
		}
		catch (e) {
			if (e !== 'No current user') {
				onError(e);
			}
		}
		setIsAuthenticating(false);
	}

	function handleLogout() {
		// need to clear cookies?
		localStorage.removeItem('jwtoken');
		localStorage.clear();
		userHasAuthenticated(false);
		setIsAuthenticating(false);
		history.push("/login");
	}

	function RenderSideBar()
	{
		if(isAuthenticated) {
			return (
				<div className="mainpage top-spacing">
					<Sidebar></Sidebar>
				<div className="maincontent">
			<Routes />
		</div>
			</div>
	)}
			return <Routes/>
	}

	return (
		<div className="App">
			<div>
				{NavBar({isAuthenticated, handleLogout, t})}
			</div>
			<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
       <RenderSideBar/>
			</AppContext.Provider>
			<Footer></Footer>
		</div>
	);
}
export default App;
