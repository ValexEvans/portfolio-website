import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePhoto from '../assets/profile.jpg'; // Replace with your profile photo path
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-BurlyWood vh-80 d-flex align-items-center justify-content-center">
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Left Side: Title and Description */}
          <Col xs={12} sm={12} md={6} className="text-start mb-4 mb-md-0">
            <h1 className="display-4">Hi, I'm Valex J.P. Evans</h1>
            <p className="lead">
              I'm a Computer Science major with a passion for robotics, AI, and web development. I enjoy solving complex problems, creating innovative projects, and helping businesses bring their visions to life.
            </p>
            <Button as={Link} to="/about" className="btn-orange">
              Learn More About Me
            </Button>
          </Col>

          {/* Right Side: Profile Photo */}
          <Col xs={12} sm={12} md={6} className="text-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="img-fluid rounded-circle profile-large"
              style={{
                border: '5px solid rgb(8, 14, 20)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
