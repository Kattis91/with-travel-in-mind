import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';

const PopularExplorers = () => {

  const [explorerData, setExplorerData] = useState({
    popularExplorers: { results: [] },
  });
  const { popularExplorers } = explorerData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/explorers/?ordering=-followers_count"
        );
        setExplorerData((prevState) => ({
          ...prevState,
          popularExplorers: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container className={appStyles.Content}>
      {popularExplorers.results.length ? (
        <>
          <p>Most adventurous explorers:</p>    
          {popularExplorers.results.map((explorer) => (
            <p key={explorer.id}>{explorer.owner}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularExplorers