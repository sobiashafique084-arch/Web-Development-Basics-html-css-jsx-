import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function add() {
  return (
    <Container className="mt-5 text-start">
      <h2 className="mb-4 text-center">Add New Course Record</h2>
      <Form className="p-4 shadow-sm border rounded bg-light">
        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" placeholder="e.g. Web Technology" />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label>Instructor Name</Form.Label>
            <Form.Control type="text" placeholder="Instructor name" />
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-3">
            <Form.Label>Students Enrolled</Form.Label>
            <Form.Control type="number" placeholder="0" />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="e.g. 6 Months" />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label>Course Fee</Form.Label>
            <Form.Control type="text" placeholder="Fee in PKR" />
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Course Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter details..." />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" className="px-5 fw-bold">
            Add Course Record
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default add;