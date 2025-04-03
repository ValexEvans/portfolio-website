import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3, FaPhp, FaBootstrap, FaGitAlt, FaAws, FaJira, FaDatabase, FaTools, FaProjectDiagram, FaCogs, FaRobot, FaFileWord, FaCodeBranch } from "react-icons/fa";
import { IoLogoJavascript, IoHardwareChip } from "react-icons/io5";

export default function SkillsList() {
    const [activeContent, setActiveContent] = useState("languages");

    const skillsData = {
        languages: [
            { name: "Java", icon: <FaJava className="text-danger" /> },
            { name: "JavaScript", icon: <IoLogoJavascript className="text-warning" /> },
            { name: "Python", icon: <FaPython className="text-warning" /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3 /> },
            { name: "PHP", icon: <FaPhp /> },
            { name: "MySQL", icon: <FaDatabase /> },
            { name: "SQL", icon: <FaDatabase /> },
            { name: "ReactJS", icon: <FaReact className="text-primary" /> },
            { name: "React Native", icon: <FaReact className="text-primary" /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
        ],
        tools: [
            { name: "Git", icon: <FaGitAlt className="text-danger" /> },
            { name: "Postman", icon: <FaTools className="text-warning" /> },
            { name: "AWS", icon: <FaAws className="text-warning" /> },
            { name: "Jira", icon: <FaJira className="text-primary" /> },
            { name: "Scrum", icon: <FaProjectDiagram className="text-success" /> },
            { name: "Visual Studio", icon: <FaCodeBranch className="text-blue-500" /> },
            { name: "UML", icon: <FaProjectDiagram className="text-gray-500" /> },
            { name: "SolidWorks", icon: <FaCogs className="text-danger" /> },
            { name: "Fusion 360", icon: <FaCogs className="text-blue-500" /> },
            { name: "Arduino", icon: <IoHardwareChip className="text-info" /> },
            { name: "Robotics", icon: <FaRobot className="text-warning" /> },
            { name: "MS Office", icon: <FaFileWord className="text-green-600" /> },
        ],
    };


    const renderSkills = (skills) => (
        <Row className="text-white">
            {skills.map((skill, index) => (
                <Col key={index} className="p-2" md={3}>
                    <p className="about-skills text-start p-3 bg-dark rounded d-flex align-items-center">
                        <span className="me-2">{skill.icon}</span> {skill.name}
                    </p>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container className="text-start vh-40">
            {/* Button Row */}
            <Row className="mb-4">
                <Col>
                    <div className="d-flex gap-2">
                        <button
                            className={`btn ${activeContent === "tools" ? "bg-gold text-white" : "btn-outline-gold"}`}
                            onClick={() => setActiveContent("languages")}
                        >
                            Languages & Frameworks
                        </button>
                        <button
                            className={`btn ${activeContent === "languages" ? "bg-gold text-white" : "btn-outline-gold"}`}
                            onClick={() => setActiveContent("tools")}
                        >
                            Tools & Technologies
                        </button>
                    </div>
                </Col>
            </Row>

            {/* Content Row */}
            <Row>
                <Col>
                    <div className="rounded">{renderSkills(skillsData[activeContent])}</div>
                </Col>
            </Row>
        </Container>
    );
}    