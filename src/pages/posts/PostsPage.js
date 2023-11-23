import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import { Button, Form } from "react-bootstrap";
import PopularExplorers from "../explorers/PopularExplorers";
import PopularPosts from "./PopularPosts";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${search}&region=${region}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
    
  }, [filter, search, region, pathname]);

  const clearFilters = () => {
    setSearch("")
    setRegion("")
  }
   
  return (
    <>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularExplorers mobile />
        <PopularPosts mobile />
          <Row>
            <Col lg={4} xs={4}>
            <Form>
              <Form.Control
                as="select"
                placeholder="Choose..."
                value={region}
                onChange={(event) => setRegion(event.target.value)}
              >
                <option hidden>Region</option>
                <option>Europe</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>North America</option>
                <option>South America</option>
                <option>Antarctica</option>
                <option>Australien</option>
              </Form.Control>
            </Form>
          </Col>
          <Col lg={8} xs={8}>
              <i className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}></i>
              <Form 
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
              >
                <Form.Control
                  type="text"
                  placeholder="Search posts by the title or the name of the explorer" 
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </Form>
            </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
            {search || region ? (
              <Button
                onClick={() => {
                  clearFilters();
                }}
              >
                Reset your search filter
              </Button>
            ) : null }  
          </Col>   
        </Row>   
  
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularExplorers />
        <PopularPosts />
      </Col>
    </Row>
    </>
  );
}

export default PostsPage;