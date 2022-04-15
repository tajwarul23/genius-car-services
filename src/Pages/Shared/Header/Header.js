import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';
import logo from '../../../images/logo.png';

const auth =getAuth(app)
const Header = () => {
  const [user]=useAuthState(auth);
  const navigate =useNavigate();
  
  const handleSignOut = ()=>{
    signOut(auth)
    .then(()=>{navigate('/login')})
  }
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo}  height={30} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              {
                user ?
                <button onClick={handleSignOut} className='btn btn-primary'> Sign Out</button>
                :
                <Nav.Link as={Link} to="/login">
               Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
};

export default Header;