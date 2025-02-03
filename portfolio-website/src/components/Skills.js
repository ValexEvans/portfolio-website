import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FaReact, FaJava, FaPython, FaHtml5, FaCss3, FaPhp, FaDatabase, FaAws, FaGitAlt } from "react-icons/fa";
// import { SiJavascript, SiMysql, SiPostman, SiJira, SiVisualstudio, SiArduino, SiSolidworks, SiFusion360 } from "react-icons/si";
import { FaReact, FaJava, FaPython , FaHtml5, FaCss3, FaPhp, FaBootstrap  } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeSql } from "react-icons/bs";


export default function Skills() {
    const [activeContent, setActiveContent] = useState("languages");

    const skillsData = {
        languages: [
            { name: "Java", icon: <FaJava  className="text-danger"/>},
            { name: "JavaScript", icon: <IoLogoJavascript className="text-warning"/>},
            { name: "Python", icon: <FaPython  className="text-warning" />},
            { name: "HTML", icon: <FaHtml5 />},
            { name: "CSS", icon: <FaCss3 />},
            { name: "PHP", icon: <FaPhp />},
            { name: "MySQL", icon: <GrMysql  />},
            { name: "SQL", icon: <BsFiletypeSql  />},
            { name: "ReactJS", icon: <FaReact className="text-primary"/>},
            { name: "React Native", icon: <FaReact className="text-primary"/>},
            { name: "Bootstrap", icon: <FaBootstrap  />},
        ],
        tools: [
            { name: "Git", icon: <FaReact /> },
            { name: "Postman", icon: <FaReact /> },
            { name: "AWS", icon: <FaReact /> },
            { name: "Jira", icon: <FaReact /> },
            { name: "Scrum", icon: <FaReact /> },
            { name: "Visual Studio", icon: <FaReact /> },
            { name: "UML", icon: <FaReact /> },
            { name: "SolidWorks", icon: <FaReact /> },
            { name: "Fusion 360", icon: <FaReact /> },
            { name: "Arduino", icon: <FaReact /> },
            { name: "Robotics", icon: <FaReact /> },
            { name: "MS Office", icon: <FaReact /> },
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
                        <button className="btn btn-primary" onClick={() => setActiveContent("languages")}>
                            Languages & Frameworks
                        </button>
                        <button className="btn btn-primary" onClick={() => setActiveContent("tools")}>
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
