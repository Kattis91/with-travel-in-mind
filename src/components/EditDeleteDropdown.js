import React from "react";
import { Dropdown } from "react-bootstrap";

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
    <Dropdown>
      <Dropdown.Toggle as={Bars} />  
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
  
 