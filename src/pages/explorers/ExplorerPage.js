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
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { ExplorerEditDropdown } from "../../components/EditDeleteDropdown";
import PopularPosts from "../posts/PopularPosts";

function ExplorerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const currentUser = useCurrentUser();
  const { id } = useParams();
  
  const {setExplorerData, handleFollow, handleUnfollow, handleFan, handleUnfan} = useSetExplorerData();
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
      {explorer?.is_owner && <ExplorerEditDropdown id={explorer?.id} />}
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
            {currentUser && !is_owner &&
              (explorer?.following_id ? (
                <Button
                  className={btnStyles.Unfollow}
                  onClick={() => handleUnfollow(explorer)}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  className={btnStyles.Purple}
                  onClick={() => handleFollow(explorer)}
                >
                  Follow
                </Button>
              ))
            }
          </Col>
          <Col>
            <span className="text-center">
              {currentUser && !is_owner &&
                (explorer?.favoriting_id ? (
                  <Button
                  className={`${btnStyles.Unfan} mt-2`}
                    onClick={() => handleUnfan(explorer)}
                  >
                    Unfan
                  </Button>
                ) : (
                  <Button
                    className={`${btnStyles.Red} mt-2`}
                    onClick={() => handleFan(explorer)}
                  >
                    Fan
                  </Button>
                ))
              }
            </span>
          </Col>
        </Row>
      {explorer?.bio && <Col className="text-center mt-3">{explorer.bio}</Col>}
      {explorer?.region_you_would_like_to_explore ? (
        <Col className="text-center mt-3"><p>The region I want to explore more of: 
          <i className={styles.ExplorerDetails}>{explorer.region_you_would_like_to_explore}</i></p></Col>
      ) : null }
      {explorer?.dream_destination ? (
        <Col className="text-center mt-3">My dream destination is: 
          <i className={styles.ExplorerDetails}>{explorer.dream_destination}</i></Col>
      ) : null }       
    </>
  );

  const mainExplorerPosts = (
    <>
      <hr />
      <p className="text-center">{`{explorer?.owner}'s posts:`}</p>
      <hr />
      {explorerPosts.results.length ? (
        <InfiniteScroll
          // eslint-disable-next-line 
          children={explorerPosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setExplorerPosts} />
          ))}
          dataLength={explorerPosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!explorerPosts.next}
          next={() => fetchMoreData(explorerPosts, setExplorerPosts)}
        />
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
      <Col className="py-2 p-0 p-lg-2 mt-3" lg={8}>
        <PopularExplorers mobile />
        <PopularPosts mobile />
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
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2 mt-3">
        <PopularExplorers />
        <PopularPosts />
      </Col>
    </Row>
  );
}

export default ExplorerPage;