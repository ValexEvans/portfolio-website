import { Container, Row, Col } from 'react-bootstrap';
import cooledtured from '../assets/cooledtured.png'; // Replace with your profile photo path
import viable from '../assets/viable.jpg'; // Replace with your profile photo path
import limbitless from '../assets/limbitless.jpg'; // Replace with your profile photo path
import crunchy from '../assets/crunchy.png'; // Replace with your profile photo path
import { FaGithub } from "react-icons/fa6"

export default function ExperienceList() {

    const data = {
        experience: [
            {
                role: "Web Developer Intern",
                company: "Cooledtured",
                duration: "10/24 - Present",
                image: cooledtured,
                summary: "Developed modular and scalable React components for a responsive e-commerce website. Identified and resolved bugs to improve functionality and enhance user experience.",
                // details: [
                //     "Developed modular and scalable React components for a responsive e-commerce website.",
                //     "Identified and resolved bugs to improve functionality and enhance user experience."
                // ]
            },
            {
                role: "Engineering Intern",
                company: "Crunchy Tech",
                duration: "06/22 - 12/22",
                image: crunchy,
                summary: "Utilized SOLIDWORKS for prototyping and rendering 3D visuals for assembly instructions.Created detailed BOMs and rendered 3D visuals to improve manufacturing workflows.",
                // details: [
                //     "Utilized SOLIDWORKS for prototyping and rendering 3D visuals for assembly instructions.",
                //     "Created detailed BOMs and rendered 3D visuals to improve manufacturing workflows."
                // ]
            },
            {
                role: "Engineering Intern",
                company: "Siemens Energy Innovation Center by Viable Engineering Solutions",
                duration: "01/22 - 05/22",
                image: viable,
                summary: "Collaborated with a team to research and develop a Compressed Air Energy Storage System (C.A.E.S.). Programmed a microcontroller using C++ to collect sensor data for industrial applications. Developed automated data-logging solutions integrated with Excel for efficient analysis.",
                // details: [
                //     "Collaborated with a team to research and develop a Compressed Air Energy Storage System (C.A.E.S.).",
                //     "Programmed a microcontroller using C++ to collect sensor data for industrial applications.",
                //     "Developed automated data-logging solutions integrated with Excel for efficient analysis."
                // ]
            },
            {
                role: "Engineering Intern",
                company: "Limbitless Solutions Inc.",
                duration: "05/21 - 12/21",
                image: limbitless,
                summary: "Designed, assembled, and tested multi-gesture prosthetic hands and a custom 3D-printed gearbox assembly, demonstrating precision in robotics and mechanical design.",
                // details: [
                //     "Designed, assembled, and tested multi-gesture prosthetic hands and a custom 3D-printed gearbox assembly, demonstrating precision in robotics and mechanical design."
                // ]
            }
        ],
        highlights: [
            {
                title: "Custom Prosthetic Hand and Gearbox Development",
                duration: "Spring 2021",
                icon: <a href="https://github.com/ValexEvans/robotic-hand/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Utilized Fusion 360 to design and model prosthetic hands and a custom 3D-printed gearbox assembly, ensuring mechanical functionality and precision. Led the assembly process and conducted rigorous testing to evaluate performance, durability, and alignment with design requirements.",
            },
            {
                title: "Portfolio Website Development to Showcase Skills and Projects",
                duration: "Ongoing",
                icon: <a href="https://github.com/ValexEvans/portfolio-website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Designed and developed a fully responsive personal portfolio website using React and Bootstrap to effectively present professional accomplishments. The site features a clean, modern interface with dedicated sections for project highlights, technical skills, education, and work experience.",

            }
        ],
        projects: [
            {
                title: "Back-End Development for Synthetic Voice Operator Senior Design Project - PEO STRI",
                duration: "08/24 - Present",
                icon: <a href="https://github.com/portjm/SVO" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Developed back-end APIs and integrated an advanced Large Language Model. Designed and implemented a MySQL database for storing and retrieving structured data efficiently.",
                // details: [
                //     "Developed back-end APIs and integrated an advanced Large Language Model.",
                //     "Designed and implemented a MySQL database for storing and retrieving structured data efficiently."
                // ]
            },
            {
                title: "Portfolio Website Development to Showcase Skills and Projects",
                duration: "Ongoing",
                icon: <a href="https://github.com/ValexEvans/portfolio-website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Designed and developed a fully responsive personal portfolio website using React and Bootstrap to effectively present professional accomplishments. The site features a clean, modern interface with dedicated sections for project highlights, technical skills, education, and work experience.",

            },
            {
                title: "Mobile Application Development for Turntable Project",
                duration: "02/24 - 04/24",
                icon: <a href="https://github.com/ValexEvans/turntable-app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Developed a mobile application with custom REST API integration for seamless connectivity. Collaborated closely on front-end design contributing to the creation and implemented an intuitive landing page wireframe that enhanced user experience and navigation.",
            },
            {
                title: "Full-Stack Development for LAMP Stack Contact Manager Project",
                duration: "01/24 - 02/24",
                icon: <a href="https://github.com/ValexEvans/html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Developed a multi-user web application with role-based access control using the LAMP stack, ensuring security and scalability. The project leveraged HTML, CSS, JavaScript, PHP, and MySQL, with deployment on DigitalOcean for optimal performance.",
            },
            {
                title: "Image Classifier Using Convolutional Neural Networks",
                duration: "10/23 - 12/23",
                icon: <a href="https://github.com/ValexEvans/robot-vision" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><FaGithub /><span style={{ fontSize: '12px' }}> View More</span></a>,
                summary: "Developed and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify handwritten digits from the MNIST dataset, achieving a test accuracy of 99%.",
            }
        ]
    };



    const renderExperience = (experience) => (
        <Row className="text-white">
            {experience.map((item, index) => (
                <Col key={index} sm={12} md={6}>
                    <div className="mb-4 p-3 bg-dark rounded-4  min-vh-experience" >
                        <img
                            src={item.image}
                            alt="Profile"
                            className="img-fluid  "
                            style={{
                                borderRadius: '15px', // ✅ Adds curved borders
                                height: 'auto',

                            }}
                        />
                        <h5 className="pt-4">{item.role} | {item.company}</h5>
                        <p className="text-muted">{item.duration}</p>
                        <p className="text-muted ">{item.summary}</p>
                        {/* <ul>
                            {item.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul> */}
                    </div>
                </Col>
            ))}
        </Row>
    );

    const renderProjects = (projects) => (
        <Row className="text-white">
            {projects.map((project, index) => (
                <Col key={index} sm={12} md={6}>
                    <div className="mb-4 p-3 bg-dark rounded-4 min-vh-projects " >
                        <h5>{project.title}</h5>
                        <p className="text-muted">{project.duration}</p>
                        <p className="text-muted">{project.summary}</p>
                        <span>{project.icon}</span>

                    </div>
                </Col>
            ))}
        </Row>
    );

    const renderHighlights = (highlights) => (
        <Row className="text-white g-4">
            {highlights.map((highlights, index) => (
                <Col key={index} sm={12} md={6}>
                    <div className="project-card mb-4 p-4 bg-gradient-dark rounded-4 shadow-lg border border-secondary position-relative overflow-hidden  min-vh-projects">
                        {/* Decorative element - diagonal accent line */}
                        <div className="accent-line"></div>

                        <h5 className="fw-bold mb-2 position-relative z-2">{highlights.title}</h5>
                        <p className="text-muted">{highlights.duration}</p>
                        <p className="text-muted mb-3">{highlights.summary}</p>

                        {/* Icon with glowing effect */}
                        <div className=" mb-3">
                            <span className="highlight-icon">{highlights.icon}</span>
                        </div>

                        
                    </div>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container className="text-start vh-80">
            {/* Content Row */}
            <Row>
                <Col>
                    <div className="rounded">
                        
                        <Container className="text-white mb-4 p-3  rounded-4">
                            <h5 className="text-white  p-2 ">Highlights</h5>
                            {renderHighlights(data.highlights)}
                        </Container>
                        <Container className="text-white mb-4 p-3  rounded-4">
                            <h5 className="text-white  p-2 ">Projects</h5>
                            {renderProjects(data.projects)}
                        </Container>
                        <Container className="text-white mb-4 p-3  rounded-4">
                            <h5 className="text-white  p-2 ">Work Experience</h5>
                            {renderExperience(data.experience)}
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
