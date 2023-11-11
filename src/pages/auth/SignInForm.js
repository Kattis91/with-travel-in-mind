import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import appStyles from "../../App.module.css";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from 'react-router-dom';

const SignInForm = () => {

  const [signInData, setSignInData] = useState({
    username: '',
    pasword: ''
  })

  const {username, password} = signInData;

  const handleChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Row className={styles.Row}>
      <Col md={6}
        className={`my-auto d-none d-md-block ${styles.SignInCol}`}
      >
        <Image 
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/dx0imlozl/image/upload/v1699661594/sign-up-form-image_j0wu6f.avif"}         
        />
      </Col>
      <Col className="my-auto p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign In</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control 
                className={styles.Input}
                type="text" 
                placeholder="Enter username" 
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control   
                className={styles.Input}        
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
              Sign in
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Don't have an account yet? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>  
    </Row>  
  )
}

export default SignInForm