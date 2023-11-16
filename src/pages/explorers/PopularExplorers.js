import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import Explorer from './Explorer';

const PopularExplorers = ({ mobile }) => {

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
    <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
      {popularExplorers.results.length ? (
        <>
          <p>Check out these popular adventurous explorers:</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularExplorers.results.slice(0, 5).map((explorer) => (
                <Explorer key={explorer.id} explorer={explorer} mobile />
              ))}
            </div>
          ) : (
            popularExplorers.results.map((explorer) => (
              <Explorer key={explorer.id} explorer={explorer} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularExplorers