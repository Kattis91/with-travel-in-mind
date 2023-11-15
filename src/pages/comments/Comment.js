import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Comment = (props) => {
  const { 
    explorer_id, 
    explorer_image, 
    owner, 
    updated_at, 
    content,
  } = props;
  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/explorers/${explorer_id}`}>
          <Avatar src={explorer_image} />
        </Link>
        <Media.Body className="align-self-center mr-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}><i className={`${styles.DateIcon} fa-regular fa-clock`}></i>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <EditDeleteDropdown /> 
        )}  
      </Media>
    </div>
  );
};

export default Comment;