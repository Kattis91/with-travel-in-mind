import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import appStyles from '../../App.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosRes } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';


const PopularPosts = () => {

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
    <Container className={`${appStyles.Content} mt-3`}>
      {popularPosts.results.length ? (
        <>
          <p className='text-center'>Hottest posts right now:</p>
          {popularPosts.results.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
}

export default PopularPosts