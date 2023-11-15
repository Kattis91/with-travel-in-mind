import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/ModalDeleteConfirmation.module.css";

const ModalDeleteConfirmation = (props) => {
  
  const {
    showModal,
    handleClose,
    handleDelete,
  } = props

  return (
    <Modal className={`${styles.Modal}`} show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Just to confirm..</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure you want to delete this post?`}</Modal.Body>
      <Modal.Footer>
        <Button className={`${btnStyles.Button} ${btnStyles.FormRed}`} onClick={handleDelete}>
          Yes!
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.FormGreen}`} onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteConfirmation;