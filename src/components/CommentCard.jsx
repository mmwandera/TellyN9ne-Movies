import React from 'react';
import './style.css';

function CommentCard({ comment, onDeleteComment }) {
  const handleDelete = () => {
    onDeleteComment(comment.id);
  };

  return (
    <div className="comment-card">
      <div className="comment-info">
        <h3>{comment.name}</h3>
        <p>{comment.comment}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CommentCard;
