import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

  const currentUser = useCurrentUser();

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/signin"
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign in
      </NavLink>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="75" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink 
              exact
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/"
            >
              <i class="fa-solid fa-house-user"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar