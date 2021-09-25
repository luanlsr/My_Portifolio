import React from 'react'
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import '../styles/Footer.css'

function Bottom() {
  return (
    <div className="footer">
      <Navbar bg="dark" variant="dark" >
    <Container>
    <Nav className="mx-auto">
      <p>Created By Luan da Silva Ramalho | &#169; 2021</p>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Bottom
