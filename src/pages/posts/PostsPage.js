import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PostsPage() {

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Most adventurous explorers for mobile</p>
        <p>The list of posts goes here</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Most adventurous explorers for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;