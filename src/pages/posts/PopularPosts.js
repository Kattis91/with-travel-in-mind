import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'

import appStyles from '../../App.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosRes } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import MostLikedPost from './MostLikedPost';


const PopularPosts = ({ mobile }) => {

  const [postData, setPostData] = useState({
    popularPosts: { results: [] },
  });

  const { popularPosts } = postData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosRes.get(
          "/posts/?ordering=-likes_count"
        );
        setPostData((prevState) => ({
          ...prevState,
          popularPosts: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
  
    handleMount();
  }, [currentUser]);

  return (
    <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'} mt-3`}>
      {popularPosts.results.length ? (
        <>
          <p className='text-center'>Hottest posts right now &#128293;</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularPosts.results.slice(0, 3).map((post) => (
               <MostLikedPost key={post.id} post={post} mobile />
              ))}
            </div>
          ) : (
            popularPosts.results.slice(0, 10).map((post) => (
              <MostLikedPost key={post.id} post={post} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
}

export default PopularPosts