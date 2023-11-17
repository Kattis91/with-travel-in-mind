import React from 'react'
import styles from '../../styles/Explorer.module.css'
import btnStyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Button } from 'react-bootstrap';
import { useSetExplorerData } from '../../contexts/ExplorerDataContext';

const Explorer = (props) => {

  const { explorer, mobile, imageSize = 55 } = props;
  const { id, following_id, favoriting_id, image, owner } = explorer;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow, handleFan } = useSetExplorerData();
  
  
  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/explorers/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={styles.WordBreak}>
        <strong>{owner}</strong>
      </div>
      <div className="text-right ml-auto">
        <span className={styles.Inline}>
        {!mobile && currentUser && !is_owner && (
          following_id ? (
            <Button
              className={`${btnStyles.Button}`}
              onClick={() => handleUnfollow(explorer)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button}`}
              onClick={() => handleFollow(explorer)}
            >
              Follow
            </Button>     
          ))
        }
        </span>
        <span className={styles.Inline}>
        {!mobile && currentUser && !is_owner && (
          favoriting_id ? (
            <Button
              className={`${btnStyles.Button}`}
            >
              Unfan
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button}`}
              onClick={() => handleFan(explorer)}
            >
              Fan
            </Button>     
          ))
        }
        </span>
      </div>
    </div>
  );
};

export default Explorer