import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

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
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/explorers/${explorer_id}`}>
            <Avatar src={explorer_image} height={55} />
            {owner}
          </Link>
          <div className='d-flex align-items-center'>
            <span>{updated_at}</span>
            {is_owner && postPage && "..." }
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
      </Card.Body>
    </Card>
  )
}

export default Post