import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import appStyles from "../../App.module.css";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';

function SignInForm() {

  useRedirect('loggedIn')

  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: '',
    pasword: ''
  })

  const {username, password} = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

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
          <Form onSubmit={handleSubmit}>
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
            {errors.username?.map((message, idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

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
            {errors.password?.map((message, idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
              Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => 
              <Alert variant="warning" className="mt-4" key={idx}>{message}</Alert>
            )}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account yet? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>  
    </Row>  
  )
}

export default SignInForm