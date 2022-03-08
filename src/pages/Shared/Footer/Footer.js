import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row className="p-5 m-2">
          <Col sm={12} md={6} lg={6}>
            <h1> Let Us handle your project, professionally</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero
              esse animi unde soluta consequatur ullam minus maiores aut
              obcaecati itaque optio quibusdam, nemo sequi? Eos nostrum delectus
              ut ratione.
            </p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="mb-3 mt-4 p-3"
                    type="email"
                    placeholder="Your email address"
                  />

                  <Form.Control
                    type="text"
                    className="mb-3 p-3"
                    placeholder="Your name / companys name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder=" Your Messages"
                  />
                </Form.Group>
              </Form>
              <Button type="submit" variant="dark" className="px-5">
                Send
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="text-center p-5">Copyright Orange labs 2022</p>
    </div>
  );
};

export default Footer;
