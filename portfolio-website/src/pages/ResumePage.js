import React from 'react';
import { Container } from 'react-bootstrap';

function ResumePage() {
  return (
    <div className="resume-container vh-80 d-flex align-items-center justify-content-center">
      <Container className="text-start vh-80 bg-dark rounded-4 shadow-lg px-5 py-1" >
        <h5 className="text-white p-3">My Resume</h5>
        <iframe
          src="Resume.pdf"
          style={{ width: '100%', height: '90vh' }}
          className="border rounded  flex-grow-1"
        />
      </Container>
    </div>
  );
}

export default ResumePage;
