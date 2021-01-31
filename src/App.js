import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";
import { useTranslation } from "react-i18next";
import NavBar from "./app/components/NavBar";

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

	return (
		<div className="App">
			<div>
				<small>
					{t('common.debug-header')} -
			<a href="https://calendly.com/namsor/uncopied_art" target="top"> {t('common.debug-contact')} </a>
			-
			debug env {process.env.REACT_APP_UNCOPIED_API}
				</small>
				${NavBar({isAuthenticated, handleLogout, t})}
			</div>
			<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
				<Routes />
			</AppContext.Provider>
		</div>
	);
}
export default App;
