import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function del() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center text-danger">Delete Course Record</h2>
      <Card className="p-4 shadow-sm border-danger mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Form.Group className="mb-4 text-start">
            <Form.Label>Choose Course to Remove</Form.Label>
            <Form.Select className="border-danger">
              <option>-- Select Course --</option>
              <option>Web Technology</option>
              <option>Mobile Application</option>
              <option>Graphic Designing</option>
            </Form.Select>
          </Form.Group>

          <p className="text-muted small text-start">
            *Warning: Once deleted, the record cannot be recovered (Static View).
          </p>

          <div className="text-center">
            <Button variant="danger" className="px-5 fw-bold">
              Delete Permanently
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default del;