import React from 'react'
import { Button, Form } from 'react-bootstrap'

const SignInForm = () => {
  return (
    <div>
    <h1>Sign In</h1>
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
      <Button type="submit">
        Sign in
      </Button>
    </Form>
    </div>
  )
}

export default SignInForm