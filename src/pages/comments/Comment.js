import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { 
    explorer_id, 
    explorer_image, 
    owner, 
    updated_at, 
    content 
  } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/explorers/${explorer_id}`}>
          <Avatar src={explorer_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;