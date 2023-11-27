import React from 'react'
// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// CSS imports
import btnStyles from '../styles/Button.module.css';
import styles from '../styles/ModalDeleteConfirmation.module.css';

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
        { /* Delete Modal info for deleting a post */ }
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
        { /* Delete Modal info for deleting a comment */ }
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