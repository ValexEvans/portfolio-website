import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePhoto from '../assets/profile.jpg';


function AboutPage() {
  return (
    <div className="vh-80 d-flex align-items-center justify-content-center ">

      <Container>
        <Row className="about-card align-items-center p-4  my-4 text-white ">

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
            <p>Hi, I'm Valex a a passionate Web Developer dedicated to crafting clean, efficient, and user-friendly web experiences. With a strong eye for design and a deep love for problem-solving, I specialize in transforming ideas into fully functional, responsive websites that not only look great but also perform seamlessly.

              <br /> My journey in web development began with a curiosity for how things work on the internet, which quickly evolved into a full-fledged passion for building dynamic, interactive, and visually appealing websites. Whether it's developing a brand-new project from the ground up, optimizing an existing site for better performance, or implementing the latest technologies to enhance user experience, I am always eager to push the boundaries of what's possible.
            </p>
          </Col>

        </Row>


        <Row className="   text-white " md={12}>
          <Col md={3}>
            <p className="about-skills text-start p-3">HTML</p>
          </Col>
          <Col md={3}>
            <p className="about-skills text-start p-3">CSS</p>
          </Col>
          <Col md={3} >
            <p className="about-skills text-start p-3">PHP</p>
          </Col>
          <Col md={3}>
            <p className="about-skills text-start p-3">Javascript</p>
          </Col>
          <Col md={3} >
            <p className="about-skills text-start p-3">MySQL</p>
          </Col>
          <Col md={3} >
            <p className="about-skills text-start p-3">SQL</p>
          </Col>
        </Row>
      </Container>

    </div>
  );

}
export default AboutPage;