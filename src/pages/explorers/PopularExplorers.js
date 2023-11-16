import React from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'
import Asset from '../../components/Asset';
import Explorer from './Explorer';
import { useExplorerData } from '../../contexts/ExplorerDataContext';

const PopularExplorers = ({ mobile }) => {

  const { popularExplorers } = useExplorerData();

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