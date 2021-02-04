import {Navbar, Button, Nav} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import logo from './assets/logo.svg';
import LangLib from "../../../libs/langLib";

export default function NavBar({isAuthenticated, handleLogout ,t}){
  return (
    <Navbar collapseOnSelect bg="light" expand="md">
			<LinkContainer to="/">
				<Navbar.Brand className="font-weight-bold text-muted">
					<img className="logo" src={logo} alt="logo" width="150px" />
				</Navbar.Brand>
			</LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav className="Nav-section">
        <Nav.Link className="Nav-link">{t('common.link')+'1'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('common.link')+'2'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('common.link')+'3'}</Nav.Link>
        <Nav.Link className="Nav-link">{t('common.link')+'4'}</Nav.Link>
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
        </Nav>
        <LangLib />
        </Navbar.Collapse>
			</Navbar>
  );
}