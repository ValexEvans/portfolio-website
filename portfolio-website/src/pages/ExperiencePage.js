import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import ExperienceList from '../components/ExperienceList';

function ExperiencePage() {
  return (
    <div className="vh-80 d-flex align-items-center justify-content-center p-5">
      <ExperienceList />
    </div>

  );
}

export default ExperiencePage;
