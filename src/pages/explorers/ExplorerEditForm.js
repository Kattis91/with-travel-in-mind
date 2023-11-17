import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ExplorerEditForm = () => {

  const [explorerData, setExplorerData] = useState({
    name: '',
    bio: '',
    region_you_would_like_to_explore: '',
    dream_destination: '',
    image: '',
  });

  const { name, bio, region_you_would_like_to_explore, dream_destination, image } = explorerData;

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          name="bio"
          rows={7}
        />
      </Form.Group>
    </>
  )

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.FormGreen}`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ExplorerEditForm;