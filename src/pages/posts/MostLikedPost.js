import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import styles from '../../styles/ExplorerAndMostLikedPost.module.css'

const MostLikedPost = (props) => {

  const { post, imageSize = 75, width = 100 } = props;
  const { id, image } = post;
  
  return (
    <div className={"my-3 d-flex align-items-center"}>
      <div>
        <Link className="align-self-center" to={`/posts/${id}`}>
          <Image src={image} height={imageSize} width={width} rounded />
        </Link>
      </div>
      <div className={styles.WordBreak}>
        <strong className="ml-3">{post.title}</strong>
      </div>
    </div>
  );
};

export default MostLikedPost;