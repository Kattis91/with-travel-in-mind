import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const UserPasswordForm = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                name="new_password1"
                />
            </Form.Group>
           
            <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                placeholder="confirm new password"
                type="password"
                name="new_password2"
                />
            </Form.Group>
            
            <Button type="submit">
              Save
            </Button>
            <Button>
              Cancel
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};
    
export default UserPasswordForm