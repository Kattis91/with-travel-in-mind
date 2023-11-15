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

function PostDetail() {

  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const explorer_image = currentUser?.explorer_image;
  const [comments, setComments] = useState({ results: [] });
  
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };
  
    handleMount();
  }, [id]);
 
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Most adventurous explorers for mobile</p>
        <p>The hottest posts for mobile</p>
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
  
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Most adventurous explorers for desktop</p>
        <p>The hottest posts for desktop</p>
      </Col>
    </Row>
  );
}

export default PostDetail;