import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";
import LangLib from "./libs/langLib";
import { useTranslation } from "react-i18next";

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
		<div className="App pt-3">
			<div className="container">
				<small>
					{t('common.debug-header')} -
			<a href="https://calendly.com/namsor/uncopied_art" target="top"> {t('common.debug-contact')} </a>
			-
			debug env {process.env.REACT_APP_UNCOPIED_API}
				</small>
				<Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
					<LinkContainer to="/">
						<Navbar.Brand className="font-weight-bold text-muted">
							<img className="logo" src={logo} alt="logo" width="150px" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav activeKey={window.location.pathname}>
							{isAuthenticated ? (
								<Nav.Link onClick={handleLogout}>{t('common.logout')}</Nav.Link>
							) : (
									<>
										<LinkContainer to="/signup">
											<Nav.Link>{t('common.signup')}</Nav.Link>
										</LinkContainer>
										<LinkContainer to="/login">
											<Nav.Link>{t('common.login')}</Nav.Link>
										</LinkContainer>
										<a href={"https://uncopied.github.io/blog/"}>
											{t('common.blog')}
										</a>
									</>
								)}
						</Nav> <LangLib />
					</Navbar.Collapse>
				</Navbar>
			</div>
			<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
				<Routes />
			</AppContext.Provider>
		</div>
	);
}
export default App;
