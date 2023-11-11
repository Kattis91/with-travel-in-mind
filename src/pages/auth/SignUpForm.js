import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import appStyles from "../../App.module.css";

const SignUpForm = () => {
  return (
    <Row>
      <Col md={6}>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                name="username"
              />
          </Form.Group>
          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control           
              type="password" 
              placeholder="Password"
              name="password1"
            />
          </Form.Group>
          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <Form.Control          
              type="password" 
              placeholder="Confirm password"
              name="password2"
            />
          </Form.Group>
          <Button type="submit">
            Sign up
          </Button>
        </Form>
      </Col>  
      <Col md={6}>
        <Image 
          className={`${appStyles.FillerImage}`}
          src={
          "https://res.cloudinary.com/dx0imlozl/image/upload/v1699661594/sign-up-form-image_j0wu6f.avif"}         
        />
      </Col>
    </Row>  
  )
}

export default SignUpForm
