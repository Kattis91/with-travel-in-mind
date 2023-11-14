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

export const EditDeleteDropdown = ({handleEdit, handleDelete}) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={Bars} />  
      <Dropdown.Menu
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item 
          className={styles.DropdownItem} 
          aria-label="edit"
          onClick={handleEdit}
        >
          <i className="fa-solid fa-pen-to-square" />
        </Dropdown.Item>
        <Dropdown.Item 
          className={styles.DropdownItem} 
          aria-label="delete"
          onClick={handleDelete}
        >
          <i className="fa-solid fa-trash-can" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
  
 