import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";
import ModalDeleteConfirmation from "../../components/ModalDeleteConfirmation";
import Swal from 'sweetalert2';

const Comment = (props) => {
  const { 
    explorer_id, 
    explorer_image, 
    owner, 
    updated_at, 
    content,
    id,
    commentlike_id,
    commentlikes_count,
    setPost,
    setComments, 
  } = props;
  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const [showEditForm, setShowEditForm] = useState(false);

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("")

  const handleShow = () => {
    setShow(true);
    setMessage("Are you sure you want to delete your comment?");
    setType("comment");
  };

  const handleClose = () => setShow(false);

  const handleCommentDelete = async () => {
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
      Swal.fire({
        text: 'You have successfully deleted your comment!',
        icon: 'success',
        timer: 3000
      })
    } catch (err) {
      console.log(err)
    }
  };
  
  const handleCommentLike = async () => {
    try {
      const { data } = await axiosRes.post("/commentlikes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, commentlikes_count: comment.commentlikes_count + 1, commentlike_id: data.id }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCommentUnlike = async () => {
    try {
      await axiosRes.delete(`/commentlikes/${commentlike_id}`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, commentlikes_count: comment.commentlikes_count - 1, commentlike_id: null }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/explorers/${explorer_id}`}>
          <Avatar src={explorer_image} />
        </Link>
        <Media.Body className="align-self-center mr-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}><i className={`${styles.DateIcon} fa-regular fa-clock`}></i>{updated_at}</span>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{`You can't like your own comment!`}</Tooltip>}
            >
              <i className={`${styles.LikeUnlike} fa-regular fa-heart`} />
            </OverlayTrigger>
          ) : commentlike_id ? (
            <span onClick={handleCommentUnlike}>
              <i className={`${styles.LikeUnlike} fa-solid fa-heart`}  />
            </span>
          ) : currentUser ? (
            <span onClick={handleCommentLike}>
              <i className={`${styles.LikeUnlike} fa-regular fa-heart`} />
            </span>   
          ) : (
            <span>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like comments!</Tooltip>}
              >
                <i className={`${styles.LikeUnlike} fa-regular fa-heart`} />
              </OverlayTrigger>
            </span>
          )}
          {commentlikes_count}
          {showEditForm ? (
            <CommentEditForm 
              id={id}
              explorer_id={explorer_id}
              content={content}
              explorerImage={explorer_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
        <EditDeleteDropdown
          handleEdit={() => setShowEditForm(true)}
          handleDelete={handleShow} 
        />
        )}
      </Media>
      <ModalDeleteConfirmation
        showModal={show} 
        handleClose = {handleClose} 
        handleCommentDelete = {handleCommentDelete}
        type={type}
        message={message}
      />
    </> 
  )
}

export default Comment;