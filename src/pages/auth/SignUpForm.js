import React from 'react'
import { Button, Form } from 'react-bootstrap'

const SignUpForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default SignUpForm
