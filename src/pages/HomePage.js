import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePhoto from '../assets/profile.png'; // Replace with your profile photo path
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="vh-80 d-flex align-items-center justify-content-center">
      <Container >
        <Row className="align-items-center">
          {/* Left Side: Title and Description */}
          <Col xs={12} sm={12} md={6} className="text-start p-3">
            <h6 className="display-4">Hello World, I'm</h6>
            <h1 className="display-4">Valex Jean-Pierre Evans</h1>
            <p className="lead">
              Web Developer
            </p>
            <Button as={Link} to="/about" className="btn-orange">
              Learn More
            </Button>
          </Col>

          {/* Right Side: Profile Photo */}
          <Col xs={12} sm={12} md={6} className="text-center
           p-3">
            <img
              src={profilePhoto}
              alt="Profile"
              className="img-fluid rounded-circle profile-large bg-dark"
              style={{
                border: '5px solid #856a00',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
