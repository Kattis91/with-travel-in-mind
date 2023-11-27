// React imports
import React from 'react';
import { Link } from 'react-router-dom';
// CSS imports
import styles from '../../styles/ExplorerAndMostLikedPost.module.css'
import btnStyles from '../../styles/Button.module.css'
// Bootstrap import
import Button from 'react-bootstrap/Button';
// Components imports
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { useSetExplorerData } from '../../contexts/ExplorerDataContext';

const Explorer = (props) => {

  const { explorer, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = explorer;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetExplorerData();
  
  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/explorers/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div>
        <Link className={`${styles.Links} ${styles.WordBreak}`} to={`/explorers/${id}`}>
          <span>{owner}</span>
        </Link>
      </div>
      <div className="text-right ml-auto">
        {!mobile && currentUser && !is_owner && (
          following_id ? (
            <Button
              className={btnStyles.Unfollow}
              onClick={() => handleUnfollow(explorer)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={btnStyles.Purple}
              onClick={() => handleFollow(explorer)}
            >
              Follow
            </Button>     
          ))
        }
      </div>
    </div>
  );
};

export default Explorer