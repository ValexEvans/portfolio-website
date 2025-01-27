import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const WebsiteFooter = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Left Section: Contact Info */}
          <Col md={4}>
            <h5>Contact Information</h5>
            <p>Email: valex@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>

          {/* Center Section: Links */}
          <Col md={4} className="text-center">
         
          </Col>

          {/* Right Section: Social Media Icons */}
          <Col md={4} className="text-end">
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
