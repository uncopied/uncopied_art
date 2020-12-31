import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import fonts from './fonts-import.css';
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";

function App() {
	const [isAuthenticated, userHasAuthenticated] = useState(false);
	const [isAuthenticating, setIsAuthenticating] = useState(true);
	const history = useHistory();
	useEffect(() => {
	  onLoad();
	}, []);

	async function onLoad() {
	  try {
	  	if( localStorage.getItem("jwtoken") ) {
	  		// TODO set client-side expiry for this token
			userHasAuthenticated(true);
		}
	  }
	  catch(e) {
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
    <div className="App container py-3">
		<small>( debug : env is {process.env.REACT_APP_UNCOPIED_API} - PLEASE NOTE : UNCOPIED IS IN ALPHA <a href="https://calendly.com/namsor/uncopied_art" target="top"> contact / schedule a chat </a> ) </small>
		<Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
		<LinkContainer to="/">
			<Navbar.Brand className="font-weight-bold text-muted">
			  <img className="logo" src={logo} alt="logo" width="150px"/>
			</Navbar.Brand>
		 </LinkContainer>
		<Navbar.Toggle />
		<Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>	
			{isAuthenticated ? (
				  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
				) : (
				  <>
					<LinkContainer to="/signup">
					  <Nav.Link>Signup</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
					  <Nav.Link>Login</Nav.Link>
					</LinkContainer>
				  </>
				)}
          </Nav>
        </Navbar.Collapse>
	  </Navbar>		
	<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
	  <Routes />
	</AppContext.Provider>
    </div>  
  );
}
export default App;
