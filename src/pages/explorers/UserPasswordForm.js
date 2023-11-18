import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory, useParams } from 'react-router';
import { axiosRes } from '../../api/axiosDefaults';

const UserPasswordForm = () => {

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: '',
    new_password2: '',
  });
  const { new_password1, new_password2 } = userData;

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.explorer_id?.toString() !== id) {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                name="new_password1"
                value={new_password1}
                onChange={handleChange}
                />
            </Form.Group>
           
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                name="new_password2"
                value={new_password2}
                onChange={handleChange}
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