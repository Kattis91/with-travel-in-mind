import React from 'react'
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

import styles from '../../styles/ExplorerAndMostLikedPost.module.css'

const MostLikedPost = (props) => {

  const { post, mobile, imageSize = 75, width = 100 } = props;
  const { id, image } = post;
  
  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link className="align-self-center" to={`/posts/${id}`}>
          <Image src={image} height={imageSize} width={width} rounded />
        </Link>
      </div>
      <div>
        <Link className={`${styles.Links} ${styles.WordBreak}`} to={`/posts/${id}`}>
          <p className="ml-2">{post.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default MostLikedPost;