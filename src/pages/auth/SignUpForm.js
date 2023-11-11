import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import appStyles from "../../App.module.css";
import styles from "../../styles/SignUpForm.module.css";
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col md={6}
        className={`my-auto d-none d-md-block ${styles.SignUpCol}`}
      >
        <Image 
          className={`${appStyles.FillerImage}`}
          src={
          "https://res.cloudinary.com/dx0imlozl/image/upload/v1699661594/sign-up-form-image_j0wu6f.avif"}         
        />
      </Col>
      <Col className="my-auto p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                  className={styles.Input}
                  type="text" 
                  placeholder="Enter username" 
                  name="username"
                />
            </Form.Group>
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control   
                className={styles.Input}        
                type="password" 
                placeholder="Password"
                name="password1"
              />
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control 
                className={styles.Input}         
                type="password" 
                placeholder="Confirm password"
                name="password2"
              />
            </Form.Group>
            <Button type="submit">
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>  
    </Row>  
  )
}

export default SignUpForm
