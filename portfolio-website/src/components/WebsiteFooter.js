import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const WebsiteFooter = () => {
  return (
    <footer className=" text-white py-4" bg="bg-color" >
      <Container className='py-2'>
        <Row>
          {/* Left Section: Contact Info */}
          <Col md={6} className="text-start">
            <h5>Contact Information</h5>
            <p>Email: valexevans0@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>

          {/* Right Section: Social Media Icons */}
          <Col md={6} className="text-end">
            <h5>Follow Me</h5>
            <ul className="list-unstyled d-flex justify-content-end">
              <li><a href="https://www.linkedin.com" className="text-white me-3"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://github.com" className="text-white"><i className="fab fa-github"></i> GitHub</a></li>
            </ul>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default WebsiteFooter;
