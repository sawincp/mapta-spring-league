import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Form.Group
                  className="mb-3"
                  controlId="emailInput"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  autoFocus />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="passwordInput"
                >
                  <Form.Label>Pasword</Form.Label>
                  <Form.Control 
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  autoFocus />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleLogin}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
