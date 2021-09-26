import React from 'react'
import logo from '../assets/images/luanlogo.png';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#about"><img src={logo} alt="logo" width="180px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"/>
      <Nav className="justify-content-end">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contacts">Contacts</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar
