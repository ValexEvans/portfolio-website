import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import cooledtured from '../assets/cooledtured.png'; // Replace with your profile photo path
import viable from '../assets/viable.jpg'; // Replace with your profile photo path
import limbitless from '../assets/limbitless.jpg'; // Replace with your profile photo path
import crunchy from '../assets/crunchy.png'; // Replace with your profile photo path

export default function Experience() {
    const [activeContent, setActiveContent] = useState('experience');

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
        projects: [
            {
                title: "Synthetic Voice Operator Project - PEO STRI",
                duration: "08/24 - Present",
                summary: "Developed back-end APIs and integrated an advanced Large Language Model. Designed and implemented a MySQL database for storing and retrieving structured data efficiently.",
                // details: [
                //     "Developed back-end APIs and integrated an advanced Large Language Model.",
                //     "Designed and implemented a MySQL database for storing and retrieving structured data efficiently."
                // ]
            },
            {
                title: "Mobile Application Development for Turntable Project",
                duration: "02/24 - 04/24",
                summary: "Developed API endpoints for seamless mobile app-backend connectivity. Coordinated with the front-end team to integrate and design the landing mobile wireframe.",
            },
            {
                title: "Mobile Application Development for Turntable Project",
                duration: "01/24 - 02/24",
                summary: "Focused on the Front-End development, gaining proficiency in PHP, MySQL, and JavaScript.Presented a LAMP stack contact manager project, showcasing professionalism, standards adherence, and clear communication.",
            },
            {
                title: "Image Classifier Using Convolutional Neural Networks",
                duration: "10/23 - 12/23",
                summary: "Developed and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify handwritten digits from the MNIST dataset, achieving a test accuracy of 99%.",
            }
        ]
    };



    const renderExperience = (experience) => (
        <Row className="text-white">
            {experience.map((item, index) => (
                <Col key={index} sm={12} md={6}>
                    <div className="mb-4 p-3 bg-dark rounded-4" >
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
                        <p className="text-muted">{item.summary}</p>
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
                    <div className="mb-4 p-3 bg-dark rounded-4" >
                        <h5>{project.title}</h5>
                        <p className="text-muted">{project.duration}</p>
                        <p className="text-muted">{project.summary}</p>
                        {/* <ul>
                            {project.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul> */}
                    </div>
                </Col>
            ))}
        </Row>
    );

    // return (
    //     <Container className="text-start vh-80">
    //         {/* Button Row */}
    //         <Row className="mb-4">
    //             <Col>
    //                 <div className="d-flex gap-2">
    //                     <button
    //                         className="btn btn-primary"
    //                         onClick={() => setActiveContent('experience')}
    //                     >
    //                         Experience
    //                     </button>
    //                     <button
    //                         className="btn btn-primary"
    //                         onClick={() => setActiveContent('projects')}
    //                     >
    //                         Projects
    //                     </button>
    //                 </div>
    //             </Col>
    //         </Row>

    //         {/* Content Row */}
    //         <Row>
    //             <Col>
    //                 <div className="rounded" >
    //                     {activeContent === 'experience' && renderExperience(data.experience)}
    //                     {activeContent === 'projects' && renderProjects(data.projects)}
    //                 </div>
    //             </Col>
    //         </Row>
    //     </Container>
    // );
    return (
        <Container className="text-start vh-80">
            {/* Content Row */}
            <Row>
                <Col>
                    <div className="rounded">
                        {renderProjects(data.projects)}
                        {renderExperience(data.experience)}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
