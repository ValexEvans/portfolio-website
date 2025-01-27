import React from 'react';

function ResumePage() {
  return (
    <div className="resume-container bg-BurlyWood p-5">
      <h1>My Resume</h1>
      <object
        data="/assets/Resume.pdf"  // Path to your PDF file
        type="application/pdf"
        className="pdf-viewer"
      >
        <p>Your browser does not support PDFs. <a href="/assets/Resume.pdf">Download the PDF</a>.</p>
      </object>
    </div>
  );
}

export default ResumePage;

