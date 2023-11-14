import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from '../styles/EditDeleteDropdown.module.css'

const Bars = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fa-solid fa-bars"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

export const EditDeleteDropdown = () => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={Bars} />  
      <Dropdown.Menu>
        <Dropdown.Item 
          className={styles.DropdownItem} 
          aria-label="edit"
        >
          <i className="fa-solid fa-pen-to-square" />
        </Dropdown.Item>
        <Dropdown.Item 
          className={styles.DropdownItem} 
          aria-label="delete"
        >
          <i className="fa-solid fa-trash-can" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
  
 