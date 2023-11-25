import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from '../styles/EditDeleteDropdown.module.css'
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// eslint-disable-next-line 
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

export function ExplorerEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={Bars} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/explorers/${id}/edit`)}
          aria-label="edit-explorer"
        >
          <i className="fa-solid fa-pen-to-square" /> Edit explorer profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/explorers/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="fa-solid fa-id-card" />
          Change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/explorers/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fa-solid fa-key" />
          Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
  
 