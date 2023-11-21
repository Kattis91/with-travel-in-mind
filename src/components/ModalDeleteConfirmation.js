import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/ModalDeleteConfirmation.module.css";

const ModalDeleteConfirmation = (props) => {
  
  const {
    showModal,
    handleClose,
    handleDelete,
    handleCommentDelete,
    type,
    message,
  } = props

  return (
    <Modal className={`${styles.Modal}`} show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Just to confirm..</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        {type === "post" && 
          <>
            <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} onClick={handleDelete}>
              Yes!
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Red}`} onClick={handleClose}>
              Cancel
            </Button>
          </>
        }
        {type === "comment" &&
          <>
            <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} onClick={handleCommentDelete}>
              Yes!
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Red}`} onClick={handleClose}>
              Cancel
            </Button>
          </>
        }
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteConfirmation;