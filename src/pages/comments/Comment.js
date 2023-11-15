import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  const { 
    explorer_id, 
    explorer_image, 
    owner, 
    updated_at, 
    content,
    id,
    setPost,
    setComments
  } = props;
  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

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
          <EditDeleteDropdown 
            handleDelete={handleDelete}
          /> 
        )}  
      </Media>
    </div>
  );
};

export default Comment;