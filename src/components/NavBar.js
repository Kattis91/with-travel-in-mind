import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import { NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [expanded, setExpanded] = useState(false);
  
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      setExpanded(!expanded);
      Swal.fire({
        text: 'You have successfully signed out!',
        icon: 'success',
        timer: 3000
      })
    } catch (err) {
      console.log(err);
    }
  };

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
      <NavDropdown 
        id={styles.dropdownMenu}
        title={
          <span >
            <i className="fa-solid fa-heart-circle-plus" />
            For you
          </span>
        }
      >
        <NavDropdown.Item
          className={styles.NavLink} 
          activeClassName={styles.Active} 
          to="/bookmarks"
          as={Link}        
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <i className="fa-solid fa-book-bookmark"></i>Bookmarks
        </NavDropdown.Item>
        <NavDropdown.Item
          className={styles.NavLink} 
          activeClassName={styles.Active} 
          to="/favorites"
          as={Link}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <i className="fa-solid fa-heart"></i>Favorites
        </NavDropdown.Item>
        <NavDropdown.Item
          className={styles.NavLink} 
          activeClassName={styles.Active} 
          to="/following"
          as={Link}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <i className="fa-solid fa-star"></i>Following
        </NavDropdown.Item>
      </NavDropdown>

      <NavLink 
        className={styles.NavLink} 
        to="/"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-right-from-bracket"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/explorers/${currentUser?.explorer_id}`}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
       <Avatar src={currentUser?.explorer_image} text="Explorer" height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/signin"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign in
      </NavLink>
      <NavLink 
        className={styles.NavLink} 
        activeClassName={styles.Active} 
        to="/signup"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="75" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle 
          onClick={() => {
            setExpanded(!expanded);
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink 
              exact
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/"
              onClick={() => {
                setExpanded(!expanded);
              }}
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