import React from 'react'
import styles from '../../styles/Explorer.module.css'
import btnStyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

const Explorer = (props) => {

  const { explorer, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = explorer;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  
  
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
    </div>
  )
}

export default Explorer