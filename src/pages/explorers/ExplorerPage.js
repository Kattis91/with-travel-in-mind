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
import { useSetExplorerData } from "../../contexts/ExplorerDataContext";

function ExplorerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setExplorerData = useSetExplorerData();

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
          <p>Image</p>
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Profile username</h3>
          <p>Profile stats</p>
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