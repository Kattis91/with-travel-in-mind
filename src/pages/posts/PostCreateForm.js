import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

  const [errors, setErrors] = useState({});

  const textFields = (
    <div className="text-center">   
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          name="title"
        /> 
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={6}
          name="description"
        /> 
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control 
          type="text" 
          name="country"
        /> 
      </Form.Group>
    
      <Button
        className={`${btnStyles.FormGreen} ${btnStyles.Button}`}
        onClick={() => {}}
      >
        Create
      </Button>
      <Button className={`${btnStyles.FormRed} ${btnStyles.Button}`} type="submit">
        Cancel
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="my-auto" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click to upload your image here" />
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;