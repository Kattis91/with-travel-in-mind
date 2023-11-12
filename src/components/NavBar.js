import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';


const NavBar = () => {

  const currentUser = useCurrentUser();

  const addPostIcon = (
    <NavLink 
      className={styles.NavLink} 
      activeClassName={styles.Active} 
      to="/posts/create"
    >
      <i className="fa-solid fa-folder-plus"></i> Add Post
    </NavLink>
  )

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/bookmarks"
      >
        <i className="fa-solid fa-book-bookmark"></i>Bookmarks
      </NavLink>
      <NavLink
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/favorites"
      >
        <i className="fa-solid fa-heart"></i>Favorites
      </NavLink>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/following"
      >
        <i className="fa-solid fa-star"></i>Following
      </NavLink>

      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/signout"
      >
        <i className="fa-solid fa-right-from-bracket"></i>Sign out
      </NavLink>
    </>
  );
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
        {currentUser && addPostIcon}
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