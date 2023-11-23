import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import Swal from "sweetalert2";

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;
    const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      Swal.fire({
        text: 'You have successfully updated your comment!',
        icon: 'success',
        timer: 3000
      })
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />   
      </Form.Group>
      <div className="text-right">
      <button
          className={`${btnStyles.Button} ${btnStyles.Purple} mr-3`} 
          type="submit"
        >
          Update
        </button>
        <button
          className={`${btnStyles.Button} ${btnStyles.Red}`} 
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;