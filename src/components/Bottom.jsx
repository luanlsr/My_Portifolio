import React from 'react'
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import '../styles/Bottom.css'

function Bottom() {
  return (
    <div className="bottom">
      <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="mx-auto">
      <h3>©Copyright | Luan da Silva Ramalho</h3>
      <br />
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Bottom
