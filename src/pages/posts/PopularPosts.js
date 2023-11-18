import React from 'react'
import { Container } from 'react-bootstrap'
import appStyles from '../../App.module.css'


const PopularPosts = () => {

  return (
    <Container className={`${appStyles.Content} mt-3`}>
      <p className='text-center'>Hottest posts right now:</p> 
    </Container>
  );
};

export default PopularPosts