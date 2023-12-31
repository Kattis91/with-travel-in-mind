// React imports
import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory, useParams } from 'react-router';
import { axiosRes } from '../../api/axiosDefaults';
// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// CSS imports
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
// Alert import
import Swal from 'sweetalert2';

const UserPasswordForm = () => {

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: '',
    new_password2: '',
  });
  const { new_password1, new_password2 } = userData;
  
  const [errors, setErrors] = useState({});

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
      Swal.fire({
        text: 'Your password is updated successfully! Sign in with your new password next time.',
        icon: 'success',
        timer: 3000        
      })
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };
  
  return (
    <Row>
      <Col className="py-2 mx-auto text-center mt-3" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="New password"
                type="password"
                name="new_password1"
                value={new_password1}
                onChange={handleChange}
                />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
           
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="Confirm new password"
                type="password"
                name="new_password2"
                value={new_password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            
            <Button 
              className={`${btnStyles.Button} ${btnStyles.Purple}`}
              type="submit"
            >
              Save
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Red} ml-3`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};
    
export default UserPasswordForm