import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useHistory } from "react-router-dom";

import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

const UsernameForm = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [username, setUsername] = useState("");

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (currentUser?.explorer_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
          
            <Button 
              className={`${btnStyles.Button} ${btnStyles.FormGreen}`}
              type="submit"
            >
              Save
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.FormRed}`}
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

export default UsernameForm;