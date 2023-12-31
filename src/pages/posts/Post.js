// React imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// Component imports
import Avatar from '../../components/Avatar';
import { EditDeleteDropdown } from '../../components/EditDeleteDropdown';
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
// CSS import
import styles from '../../styles/Post.module.css'
// axios import
import { axiosRes } from '../../api/axiosDefaults';
// Alert import
import Swal from 'sweetalert2';

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
    place,
    region,
    created_at,
    postDetail,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();
  
  // Variables to be able to display the delete post modal
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("")

  const handleShow = () => {
    setShow(true);
    setMessage(`Are you sure you want to delete ${title}?`);
    setType("post");
  };
    
  const handleClose = () => setShow(false);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      Swal.fire({
        text: 'You have successfully deleted your post!',
        icon: 'success',
        timer: 3000
      })
      history.push('/');
    } catch(err) {
      // console.log(err);
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
      // console.log(err);
    }
  };

  const handleBookmark = async () => {
    try {
      const { data } = await axiosRes.post("/bookmarks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, bookmarks_count: post.bookmarks_count + 1, bookmark_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
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
      // console.log(err);
    }
  };

  const handleUnbookmark = async () => {
    try {
      await axiosRes.delete(`/bookmarks/${bookmark_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, bookmarks_count: post.bookmarks_count - 1, bookmark_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/explorers/${explorer_id}`}>
              <Avatar src={explorer_image} height={55} />
              {owner}
            </Link>
            <div className="d-flex align-items-center">
              <span>{created_at}</span>
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
          <Link className={styles.Link} to={`/posts/${id}`}>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
          </Link>
          {description && <Card.Text className="text-center">{description}</Card.Text>}
          {place && <Card.Text className="text-center"><i className="fa-solid fa-location-dot"></i>{place}</Card.Text>}
          {region && <Card.Text className="text-center"><i className="fa-solid fa-globe"></i>{region}</Card.Text>}
          <div className={styles.Post}>
            <Link to={`/posts/${id}`}>
              <i className="far fa-comments" />
            </Link>
            {comments_count}
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{`You can't like your own post!`}</Tooltip>}
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
              <span onClick={handleUnbookmark}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Remove from bookmarks!</Tooltip>}
                >
                   <i className="fa-solid fa-bookmark" />
                </OverlayTrigger>
              </span>
            ) : currentUser ? (
              <span onClick={handleBookmark}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to bookmark this post!</Tooltip>}
                >
                   <i className="fa-regular fa-bookmark" />
                </OverlayTrigger>
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
        type={type}
        message={message}
      />
    </>
  )
}

export default Post
