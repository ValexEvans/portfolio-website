import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Experience() {
    const [activeContent, setActiveContent] = useState('languages');

    const data = {
        experience: [
            {
                role: "Web Developer Intern",
                company: "Cooledtured",
                duration: "10/24 - Present",
                details: [
                    "Developed modular and scalable React components for a responsive e-commerce website.",
                    "Identified and resolved bugs to improve functionality and enhance user experience."
                ]
            },
            {
                role: "Engineering Intern",
                company: "Crunchy Tech",
                duration: "06/22 - 12/22",
                details: [
                    "Utilized SOLIDWORKS for prototyping and rendering 3D visuals for assembly instructions.",
                    "Created detailed BOMs and rendered 3D visuals to improve manufacturing workflows."
                ]
            },
            {
                role: "Engineering Intern",
                company: "Siemens Energy Innovation Center by Viable Engineering Solutions",
                duration: "01/22 - 05/22",
                details: [
                    "Collaborated with a team to research and develop a Compressed Air Energy Storage System (C.A.E.S.).",
                    "Programmed a microcontroller using C++ to collect sensor data for industrial applications.",
                    "Developed automated data-logging solutions integrated with Excel for efficient analysis."
                ]
            },
            {
                role: "Engineering Intern",
                company: "Limbitless Solutions Inc.",
                duration: "05/21 - 12/21",
                details: [
                    "Designed, assembled, and tested multi-gesture prosthetic hands and a custom 3D-printed gearbox assembly, demonstrating precision in robotics and mechanical design."
                ]
            }
        ],
        projects: [
            {
                title: "Synthetic Voice Operator Project – PEO STRI",
                duration: "08/24 - Present",
                details: [
                    "Developed back-end APIs and integrated an advanced Large Language Model.",
                    "Designed and implemented a MySQL database for storing and retrieving structured data efficiently."
                ]
            }
        ]
    };



    const renderExperience = (experience) => (
        <div className="text-white">
            {experience.map((item, index) => (
                <div key={index} className="mb-4 p-3 bg-dark rounded" md={3}>
                    <h5>{item.role} | {item.company}</h5>
                    <p className="text-muted">{item.duration}</p>
                    <ul>
                        {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    const renderProjects = (projects) => (
        <div className="text-white">
            {projects.map((project, index) => (
                <div key={index} className="mb-4 p-3 bg-dark rounded">
                    <h5>{project.title}</h5>
                    <p className="text-muted">{project.duration}</p>
                    <ul>
                        {project.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    return (
        <Container className="text-start vh-60">
            {/* Button Row */}
            <Row className="mb-4">
                <Col>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => setActiveContent('experience')}
                        >
                            Experience
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setActiveContent('projects')}
                        >
                            Projects
                        </button>
                    </div>
                </Col>
            </Row>

            {/* Content Row */}
            <Row>
                <Col>
                    <div className="rounded">
                        {activeContent === 'experience' && renderExperience(data.experience)}
                        {activeContent === 'projects' && renderProjects(data.projects)}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
