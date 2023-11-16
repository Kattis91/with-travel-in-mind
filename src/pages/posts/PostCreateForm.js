import React, { useRef, useState } from "react";

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
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostCreateForm() {

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    description: '',
    country: '',
    region: '',
    image: ''
  });

  const { title, description, country, region, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('country', country);
    formData.append('region', region);
    formData.append('image', imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post('/posts/', formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
    <div className="text-center">   
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          name="title"
          value={title}
          onChange={handleChange}
        /> 
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        /> 
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control 
          type="text" 
          name="country"
          value={country}
          onChange={handleChange}
        /> 
      </Form.Group>
      {errors?.place?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="region">
        <Form.Label>Region</Form.Label>
        <Form.Control 
          as="select"
          name="region"
          value={region}
          onChange={handleChange}
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
      {errors?.region?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    
      <Button
        className={`${btnStyles.FormGreen} ${btnStyles.Button}`} type="submit">
        Create
      </Button>
      <Button className={`${btnStyles.FormRed} ${btnStyles.Button}`}
      onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="my-auto" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
            {image ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.FormGreen}`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click to upload your image here"
                  />
                </Form.Label>
              )}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
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