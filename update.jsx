import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function update() {
  return (
    <Container className="mt-5 text-start">
      <h2 className="mb-4 text-center text-warning">Update Course Record</h2>
      <Form className="p-4 shadow-sm border rounded bg-light">
        {/* Course Select Karne ka Option */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Select Course to Update</Form.Label>
          <Form.Select>
            <option>Web Technology</option>
            <option>Mobile Application</option>
            <option>Graphic Designing</option>
          </Form.Select>
        </Form.Group>

        <hr />

        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>New Course Name</Form.Label>
            <Form.Control type="text" placeholder="Update course name" />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label>New Instructor Name</Form.Label>
            <Form.Control type="text" placeholder="Update teacher name" />
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>Update Fee</Form.Label>
            <Form.Control type="text" placeholder="Change fee amount" />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label>Update Duration</Form.Label>
            <Form.Control type="text" placeholder="Change duration" />
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button variant="warning" type="submit" className="px-5 fw-bold text-dark">
            Save Changes
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default update;