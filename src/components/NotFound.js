import React from "react";
import NoResults from "../assets/no-results.png";
import Asset from "./Asset";
import styles from "../styles/NotFound.module.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <div className={`${styles.NotFound} text-center text-white`}>
      <Link 
        to={"/"} 
        className={styles.LinkBack}
      >
        {`Ooops.. The page doesn't exist..`}
       <br />
       {`Click here to return "Home".`}
      </Link>
        <Asset 
          src={NoResults} />
    </div>
    </>
  );
};

export default NotFound;