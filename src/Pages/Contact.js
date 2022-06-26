import React from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import contact from "../assets/contact/undraw_contact_us_re_4qqt.svg";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={contact} width="550" height="650"/>
        </Col>
        <Col className="mt-2 p-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Label>Any Queries??!!</Form.Label>
            <FloatingLabel label="">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="mt-2">
              Contact Us
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
