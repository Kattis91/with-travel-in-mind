// React imports
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// CSS imports
import appStyles from "../../App.module.css";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
// axios imports
import axios from 'axios';

import { useRedirect } from '../../hooks/useRedirect';
import Swal from 'sweetalert2';

const SignUpForm = () => {

  useRedirect('loggedIn')

  const [signUpData, setSignUpData] = useState({
    username: '',
    pasword1: '',
    password2: ''
  })

  const {username, password1, password2} = signUpData;

  const [errors, setErrors] = useState({})

  const history = useHistory();

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData)
      history.push('/signin');
      Swal.fire({
        text: `Thanks for signing up, ${username}! Nice to have you here!
             Please sign in to get access to your profile and other site features.`,
        icon: 'success',
        timer: 3000        
      })
    } catch (err){
      setErrors(err.response?.data)
    }
  }

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

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control   
                className={styles.Input}        
                type="password" 
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control 
                className={styles.Input}         
                type="password" 
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button className={`${btnStyles.Button} ${btnStyles.Red}`} type="submit">
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => 
              <Alert variant="warning" className="mt-4" key={idx}>{message}</Alert>
            )}
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
