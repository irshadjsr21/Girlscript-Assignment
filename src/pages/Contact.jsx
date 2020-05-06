import React from 'react';
import { Jumbotron, Row, Container, Col } from 'react-bootstrap';
import { MdCall, MdLocationOn, MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <Jumbotron>
      <h1>Contact us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
        laboriosam dolor facilis enim fugit, possimus maxime unde est mollitia
        odit.
      </p>
      <Container fluid="sm">
        <Row>
          <Col className="mb-4" xs={12} sm={6} md={4}>
            <a
              className="d-flex justify-content-center align-items-center flex-column text-center anchor-reset"
              href="tel:+911122334455"
            >
              <MdCall className="contact-icon"></MdCall>
              <div>+91 1122334455</div>
            </a>
          </Col>

          <Col className="mb-4" xs={12} sm={6} md={4}>
            <a
              className="d-flex justify-content-center align-items-center flex-column text-center anchor-reset"
              href="mailto:user@email.com"
            >
              <MdEmail className="contact-icon"></MdEmail>
              <div>user@email.com</div>
            </a>
          </Col>

          <Col className="mb-4" xs={12} sm={12} md={4}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="d-flex justify-content-center align-items-center flex-column text-center anchor-reset"
              href="#"
            >
              <MdLocationOn className="contact-icon"></MdLocationOn>
              <div>
                80 Broad Street 4th Floor New York, NY 10004 Phone: 212.633.1405
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
