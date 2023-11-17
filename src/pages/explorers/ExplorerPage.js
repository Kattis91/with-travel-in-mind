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
import { Button, Image } from "react-bootstrap";
import Post from "../posts/Post";
import NoResults from "../../assets/no-results.png";

function ExplorerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const currentUser = useCurrentUser();
  const { id } = useParams();
  
  const {setExplorerData, handleFollow, handleFan} = useSetExplorerData();
  const {pageExplorer} = useExplorerData();

  const [explorer] = pageExplorer.results;
  const is_owner = currentUser?.username === explorer?.owner;

  const [explorerPosts, setExplorerPosts] = useState( { results: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageExplorer }, { data: explorerPosts }] = 
          await Promise.all([
            axiosReq.get(`/explorers/${id}/`),
            axiosReq.get(`/posts/?owner__explorer=${id}`),
          ]);
        setExplorerData((prevState) => ({
          ...prevState,
          pageExplorer: { results: [pageExplorer] },
        }));
        setExplorerPosts(explorerPosts);
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
          <span className={styles.Inline}>
            {currentUser && !is_owner &&
              (explorer?.following_id ? (
                <Button
                  className={btnStyles.Button}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  className={btnStyles.Button}
                  onClick={() => handleFollow(explorer)}
                >
                  Follow
                </Button>
              ))
            }
          </span>
          <span className={styles.Inline}>
            {currentUser && !is_owner &&
              (explorer?.favoriting_id ? (
                <Button
                  className={btnStyles.Button}
                >
                  Unfan
                </Button>
              ) : (
                <Button
                  className={btnStyles.Button}
                  onClick={() => handleFan(explorer)}
                >
                  Fan
                </Button>
              ))
            }
          </span>
        </Col>
        {explorer?.bio && <Col className="text-center">{explorer.bio}</Col>}
        {explorer?.region_you_would_like_to_explore && <Col className="text-center">{explorer.region_you_would_like_to_explore}</Col>}
        {explorer?.dream_destination && <Col className="text-center">{explorer.dream_destination}</Col>}
      </Row>
    </>
  );

  const mainExplorerPosts = (
    <>
      <hr />
      <p className="text-center">{explorer?.owner}'s posts:</p>
      <hr />
      {explorerPosts.results.length ? (
        explorerPosts.results.map((post) => (
          <Post key={post.id} {...post} setPosts={setExplorerPosts} />
        ))
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${explorer?.owner} hasn't posted yet.`}
        />
      )}
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