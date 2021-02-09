import {Navbar, Button, Nav} from 'react-bootstrap';
import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import logo from './assets/logo.svg';
import LangLib from "../../../libs/langLib";

export default function NavBar({isAuthenticated, handleLogout ,t}){
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="nav-spacing">
			<LinkContainer to="/">
				<Navbar.Brand className="font-weight-bold text-muted">
					<img className="logo" src={logo} alt="logo" width="150px" />
				</Navbar.Brand>
			</LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      {/* <Nav className="Nav-section">
        <Nav.Link className="Nav-link">{t('navbar.link')+'1'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('navbar.link')+'2'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('navbar.link')+'3'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('navbar.link')+'4'}</Nav.Link>
      </Nav> */}
        <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>{t('navbar.logout')}</Nav.Link>
          ) : (
              <>
                <LinkContainer to="/login">
                  <Button className="Nav-but">{t('navbar.login')}</Button>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Button className="Nav-but">{t('navbar.signup')}</Button>
                </LinkContainer>
              </>
            )}
        </Nav>
        <LangLib />
        </Navbar.Collapse>
			</Navbar>
  );
}