import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">List</Nav.Link>
            <Nav.Link href="#">CreateList</Nav.Link>
            <Nav.Link href="/UserRegister">RegisterUser</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
