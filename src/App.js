import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import fonts from './fonts-import.css';
import { Navbar, Button } from "react-bootstrap";
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
		<div className="App">
				<small>
					{t('common.debug-header')} -
			<a href="https://calendly.com/namsor/uncopied_art" target="top"> {t('common.debug-contact')} </a>
			-
			debug env {process.env.REACT_APP_UNCOPIED_API}
				</small>
			<Navbar collapseOnSelect expand="md" bg="light" style={{ padding: 15, height: 75 }} variant="light">
				<LinkContainer to="/">
					<Navbar.Brand style={{ paddingLeft: 40 }} className="font-weight-bold text-muted">
						<img className="logo" src={logo} alt="logo" width="150px" />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="#link1">Link 1</Nav.Link>
						<Nav.Link href="#link2">Link 2</Nav.Link>
						<Nav.Link href="#link3">Link 3</Nav.Link>
						<Nav.Link href="#link4">Link 4</Nav.Link>
					</Nav>
					<Nav activeKey={window.location.pathname} style={{ paddingRight: 20 }}>
						{ isAuthenticated ? (
							<Nav.Link onClick={handleLogout}>{t('common.logout')}</Nav.Link>
						) : (
								<>
									<LinkContainer to="/login">
										<Nav.Link>{t('common.login')}</Nav.Link>
									</LinkContainer>
									<Button style={{ padding: "7px 30px"}} variant="dark" href="/signup">{t('common.signup')}</Button>
								</>
							)}
					</Nav> <LangLib />
				</Navbar.Collapse>
			</Navbar>
			<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
				<Routes />
			</AppContext.Provider>
		</div>
	);
}
export default App;
