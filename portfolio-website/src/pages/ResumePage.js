import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ResumePage() {
  return (
    <div className="resume-container p-5 flex flex-col items-center">
      <Container className=' text-start vh-80' sm={12} md={4}>
        <h5 className="text-white mb-4">My Resume</h5>
        <iframe
          src="Resume.pdf"
          width="100%"
          height="100%"
          className="border rounded shadow-lg"
        />
      </Container >
    </div>

  );
}

export default ResumePage;
