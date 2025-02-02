import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Skills() {
    const [activeContent, setActiveContent] = useState('languages');

    const skillsData = {
        languages: ['Java', 'Javascript', 'Python', 'HTML', 'CSS', 'PHP', 'MySQL', 'SQL', 'React.js', 'React Native', 'Bootstrap'],
        button2: ['Git', 'Postman', 'AWS', 'Jira', 'Scum', 'Visual Studio', 'UML', 'SolidWorks', 'Fusion 360', 'Arduino', 'Robotics', 'MS Office'],
    };

    const renderSkills = (skills) => (
        <Row className="text-white">
            {skills.map((skill, index) => (
                <Col key={index} className="p-2" md={3}>
                    <p className="about-skills text-start p-3 bg-dark rounded">{skill}</p>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container className="text-start vh-40 ">
            {/* Button Row */}
            <Row className="mb-4 ">
                <Col>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => setActiveContent('languages')}
                        >
                            Languages & Frameworks
                        </button>
                        <button
                            className="btn btn-primary "
                            onClick={() => setActiveContent('button2')}
                        >
                            Tools & Technologies
                        </button>
                    </div>
                </Col>
            </Row>

            {/* Content Row */}
            <Row>
                <Col>
                    <div className="rounded">
                        {renderSkills(skillsData[activeContent])}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}