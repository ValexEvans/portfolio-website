import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePhoto from '../assets/profile.png';
import SkillsList from '../components/SkillsList';

function AboutPage() {
  return (
    <div className="vh-80 d-flex align-items-center justify-content-center ">

      <Container>
        <Row className="about-card align-items-center p-4  my-4 text-white " md={12}>

          <Col xs={12} sm={12} md={4} className="text-start">

            <h5 className="pb-3">
              About Me
            </h5>
            <img
              src={profilePhoto}
              alt="Profile"
              className="img-fluid rounded-circle profile-small"
              style={{
                border: '2px solid #ffffff',
              }}
            />

          </Col>

          <Col xs={12} sm={12} md={8} className="text-start pt-5">
            <p>Hi,  I'm Valex Jean-Pierre Evans, a computer science student with hands-on experience in software and web development. Through my academic projects and internships, I've gained proficiency in C++, Python, JavaScript, and React, working on projects like backend API development for e-commerce platforms and building scalable web applications. I thrive in dynamic environments and approach each project with a focus on quality, efficiency, and problem-solving. I'm passionate about creating impactful software solutions and am eager to apply my technical expertise to new opportunities in the industry.
              <br />Thank you for exploring my work.
            </p>
          </Col>

        </Row>

        <SkillsList />

      </Container>

    </div>
  );

}
export default AboutPage;