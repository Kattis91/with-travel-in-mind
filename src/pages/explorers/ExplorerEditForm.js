import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";

const ExplorerEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [explorerData, setExplorerData] = useState({
    name: '',
    bio: '',
    region_you_would_like_to_explore: '',
    dream_destination: '',
    image: '',
  });

  const { name, bio, region_you_would_like_to_explore, dream_destination, image } = explorerData;

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.explorer_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/explorers/${id}/`);
          const { name, bio, region_you_would_like_to_explore, dream_destination, image } = data;
          setExplorerData({ name, bio, region_you_would_like_to_explore, dream_destination, image });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };
  
    handleMount();
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("region_you_would_like_to_explore", region_you_would_like_to_explore);
    formData.append("dream_destination", dream_destination);
  
    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }
    
    try {
      const { data } = await axiosReq.put(`/explorers/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        explorer_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
      <Form.Group controlId="region">
        <Form.Label>Region I would like to explore:</Form.Label>
        <Form.Control 
          as="select"
          name="region_you_would_like_to_explore"
          value={region_you_would_like_to_explore}
        > 
          <option>Europe</option>
          <option>Africa</option>
          <option>North America</option>
          <option>South America</option>
          <option>Antarctica</option>
          <option>Asia</option>
          <option>Australien</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Dream destination:</Form.Label>
        <Form.Control
          type="text"
          value={dream_destination}
          name="dream_destination"
        />
      </Form.Group>
      <Button className={`${btnStyles.Button} ${btnStyles.FormGreen}`} type="submit">
        Save
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.FormRed}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </>
  );
 
  return (
    <Form onSubmit={handleSubmit}>
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