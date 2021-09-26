import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import '../styles/Contacts.css'
import {
  Form,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
export default function Contact() {
  return (
    <div className="contactContainer" id="contacts">
      <h1>Contacts</h1>
      <br></br>
      <article className="social-networks">
          <a href="https://github.com/luanlsr" target="__blank"><FaGithub className="github"/></a>
          <a href="https://www.linkedin.com/in/luan-ramalholsr/" target="__blank"><FaLinkedin className="linkedin "/></a>
          <a href="https://www.instagram.com/luan_ramalholsr/" target="__blank"><GrInstagram className="instagram"/></a>
        </article>
      <Form className="form">
        <Form.Label>Name</Form.Label>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" size="lg" placeholder="Enter email" />
        </Form.Group>
        <Form.Label>Message</Form.Label>
        <InputGroup>
          <FormControl className="message" size="lg" 
          placeholder="Write your message..." as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br></br>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}