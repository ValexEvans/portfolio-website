import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

function SoftwareExperiencePage() {
  return (
    <div className="bg-BurlyWood">
      <Container className="my-5 bg-BurlyWood">
        <Row className="text-center mb-4">
          <Col>
            <h1 className="display-4">Experience</h1>

          </Col>
        </Row>

        {/* Experience Section */}
        <Row>
          <Col>
            <h2 className="text-center mb-4">Experience</h2>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Web Developer Intern | Cooledtured</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">10/24 - Present</Card.Subtitle>
                <Card.Text>
                  • Developed modular and scalable React components for a responsive e-commerce website. <br />
                  • Identified and resolved bugs to improve functionality and enhance user experience.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Engineering Intern | Crunchy Tech</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">06/22 - 12/22</Card.Subtitle>
                <Card.Text>
                  • Utilized SOLIDWORKS for prototyping and rendering 3D visuals for assembly instructions. <br />
                  • Created detailed BOMs and rendered 3D visuals to improve manufacturing workflows.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Engineering Intern | Siemens Energy Innovation Center by Viable Engineering Solutions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">01/22 - 05/22</Card.Subtitle>
                <Card.Text>
                  • Collaborated with a team to research and develop a Compressed Air Energy Storage System (C.A.E.S.). <br />
                  • Programmed a microcontroller using C++ to collect sensor data for industrial applications. <br />
                  • Developed automated data-logging solutions integrated with Excel for efficient analysis. <br />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Engineering Intern |  Limbitless Solutions Inc. </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">05/21 - 12/21</Card.Subtitle>
                <Card.Text>
                  • Designed, assembled, and tested multi-gesture prosthetic hands and a custom 3D-printed
                  gearbox assembly, demonstrating precision in robotics and mechanical design.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* More Experience Cards (Continue for the other experiences) */}
          </Col>
        </Row>

        {/* Projects Section */}
        <Row className="my-4">
          <Col>
            <h2 className="text-center mb-4">Projects</h2>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Synthetic Voice Operator Project – PEO STRI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">08/24 - Present</Card.Subtitle>
                <Card.Text>
                  • Developed back-end APIs and integrated an advanced Large Language Model <br />
                  • Designed and implemented a MySQL database for storing and retrieving structured data efficiently.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Add other projects similarly */}
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="my-4">
          <Col>
            <h2 className="text-center mb-4">Skills</h2>
            <ListGroup>
              <ListGroup.Item>C, C++, Java, JavaScript, Python, CSS, HTML, JSON, PHP, SQL, React</ListGroup.Item>
              <ListGroup.Item>Git, Postman, SolidWorks, Fusion 360, Arduino, Robotics, Visual Studio</ListGroup.Item>
              <ListGroup.Item>AWS, UML, Jira, MS Office</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="my-4">
          <Col>
            <h2 className="text-center mb-4">Education</h2>
            <Card>
              <Card.Body>
                <Card.Title>Bachelor of Science in Computer Science</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Expected Graduation: May 2025</Card.Subtitle>
                <Card.Text>
                  University of Central Florida <br />
                  Related Coursework: Algorithms for Machine Learning, Robot Vision, AWS Cloud Security Foundations, Object-Oriented Programming, Database Systems
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SoftwareExperiencePage;
