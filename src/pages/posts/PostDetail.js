import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router";
import Post from "./Post";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import PopularExplorers from "../explorers/PopularExplorers";
import PopularPosts from "./PopularPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function PostDetail() {

  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const explorer_image = currentUser?.explorer_image;
  const [comments, setComments] = useState({ results: [] });
  
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
  
    handleMount();
  }, [id]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2 mt-3" lg={8}>
        <PopularExplorers mobile />
        <PopularPosts mobile />
        <Post {...post.results[0]} setPosts={setPost} postDetail />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              explorer_id={currentUser.explorer_id}
              explorerImage={explorer_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>There are no comments for this post yet. Be the first to comment!</span>
          ) : (
            <span>No comments... yet. Log in to leave a comment!</span>
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

export default PostDetail;