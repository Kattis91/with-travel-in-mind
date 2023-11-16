import React, { useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Post.module.css'
import { axiosRes } from '../../api/axiosDefaults';
import { EditDeleteDropdown } from '../../components/EditDeleteDropdown';
import { useHistory } from 'react-router';
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation';

const Post = (props) => {

  const {
    id,
    owner,
    explorer_id,
    explorer_image,
    comments_count,
    likes_count,
    bookmarks_count,
    like_id,
    bookmark_id,
    title,
    description,
    image,
    country,
    region,
    updated_at,
    postDetail,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      history.goBack();
    } catch(err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card className="mt-5 mb-3">
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/explorers/${explorer_id}`}>
              <Avatar src={explorer_image} height={55} />
              {owner}
            </Link>
            <div className='d-flex align-items-center'>
              <span>{updated_at}</span>
              {is_owner && postDetail && (
                <EditDeleteDropdown 
                  handleEdit={handleEdit} 
                  handleDelete={handleShow} 
                /> 
              )}
            </div>
          </Media>
        </Card.Body>
        <Link to={`/posts/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          {description && <Card.Text className="text-center">{description}</Card.Text>}
          {country && <Card.Text className="text-center"><i class="fa-solid fa-location-dot"></i>{country}</Card.Text>}
          {region && <Card.Text className="text-center"><i class="fa-solid fa-globe"></i>{region}</Card.Text>}
          <div className={styles.Post}>
            <Link to={`/posts/${id}`}>
              <i className="far fa-comments" />
            </Link>
            {comments_count}
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own post!</Tooltip>}
              >
                <i className="fa-regular fa-thumbs-up" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className="fa-solid fa-thumbs-up" />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className="fa-regular fa-thumbs-up" />
              </span>   
            ) : (
              <span>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to like posts!</Tooltip>}
                >
                  <i className="fa-regular fa-thumbs-up" />
                </OverlayTrigger>
              </span>
            )}
            {likes_count}
            {bookmark_id ? (
              <span onClick={() => {}}>
                <i className="fa-solid fa-bookmark" />
              </span>
            ) : currentUser ? (
              <span onClick={() => {}}>
                <i className="fa-regular fa-bookmark" />
              </span>   
            ) : (
              <span>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to bookmark posts!</Tooltip>}
                >
                  <i className="fa-regular fa-bookmark" />
                </OverlayTrigger>
              </span>
            )}
            {bookmarks_count}
          </div>
        </Card.Body>
      </Card>
      <ModalDeleteConfirmation 
        showModal={show} 
        handleClose = {handleClose} 
        handleDelete = {handleDelete}
      />
    </>
  )
}

export default Post