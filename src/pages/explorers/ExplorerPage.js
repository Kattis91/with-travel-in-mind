import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ExplorerPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularExplorers from "./PopularExplorers";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useExplorerData, useSetExplorerData } from "../../contexts/ExplorerDataContext";
import { Image } from "react-bootstrap";

function ExplorerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setExplorerData = useSetExplorerData();
  const {pageExplorer} = useExplorerData();
  const [explorer] = pageExplorer.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageExplorer }] = await Promise.all([
          axiosReq.get(`/explorers/${id}/`),
        ]);
        setExplorerData((prevState) => ({
          ...prevState,
          pageExplorer: { results: [pageExplorer] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setExplorerData]);

  const mainExplorer = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ExplorerImage}
            roundedCircle
            src={explorer?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{explorer?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{explorer?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{explorer?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{explorer?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{explorer?.favourites_count}</div>
              <div>fans</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{explorer?.favoriting_count}</div>
              <div>favorites</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Follow button</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );

  const mainExplorerPosts = (
    <>
      <hr />
      <p className="text-center">Explorer's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularExplorers mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainExplorer}
              {mainExplorerPosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularExplorers />
      </Col>
    </Row>
  );
}

export default ExplorerPage;