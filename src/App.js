import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import {Navbar,Button} from "react-bootstrap";
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
			<div>
				<small>
					{t('common.debug-header')} -
			<a href="https://calendly.com/namsor/uncopied_art" target="top"> {t('common.debug-contact')} </a>
			-
			debug env {process.env.REACT_APP_UNCOPIED_API}
				</small>
				<Navbar collapseOnSelect bg="light" expand="md">
					<LinkContainer to="/">
						<Navbar.Brand className="font-weight-bold text-muted">
							<img className="logo" src={logo} alt="logo" width="150px" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
					<Nav className="Nav-section">
						    <Nav.Link className="Nav-link">{t('common.Link')+'1'}</Nav.Link>
						    <Nav.Link className="Nav-link">{t('common.Link')+'2'}</Nav.Link>
						    <Nav.Link className="Nav-link">{t('common.Link')+'3'}</Nav.Link>
						    <Nav.Link className="Nav-link">{t('common.Link')+'4'}</Nav.Link>
                            </Nav>
						<Nav activeKey={window.location.pathname}>
							{isAuthenticated ? (
								<Nav.Link onClick={handleLogout}>{t('common.logout')}</Nav.Link>
							) : (
									<>
										<LinkContainer to="/login">
											<Button className="Nav-but">{t('common.login')}</Button>
										</LinkContainer>
										<LinkContainer to="/signup">
											<Button className="Nav-but">{t('common.signup')}</Button>
										</LinkContainer>
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
