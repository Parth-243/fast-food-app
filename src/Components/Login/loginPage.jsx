// LoginPage.jsx
import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center">
        <Col>
          <Card className="login-card">
            <Card.Body>
              <Card.Title className="login-title text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="login-form-label">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label className="login-form-label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="login-btn w-100 mt-4"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
