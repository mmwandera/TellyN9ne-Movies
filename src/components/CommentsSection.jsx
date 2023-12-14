
import React, { useState, useEffect } from 'react';
import './style.css';

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchCommentsFromServer();
  }, []);

  function fetchCommentsFromServer() {
    fetch('http://localhost:4000/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }

  function handleCommentChange(event) {
    setNewComment(event.target.value);
  }

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePostComment() {
    if (userName.trim() !== '' && newComment.trim() !== '') {
      const commentData = {
        name: userName,
        comment: newComment,
      };

      fetch('http://localhost:4000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })
        .then(response => {
          if (response.ok) {
            fetchCommentsFromServer();
          } else {
            console.error('Failed to add comment to server.');
          }
        })
        .catch(error => console.error('Error posting comment:', error));

      setNewComment('');
      setUserName('');
    }
  }

  function handleDeleteComment(commentId) {
    fetch(`http://localhost:4000/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchCommentsFromServer();
        } else {
          console.error('Failed to delete comment from server.');
        }
      })
      .catch(error => console.error('Error deleting comment:', error));
  }

  return (
   <div className = "comments-section">
      <div className="comment-input">
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
        />
        <button onClick={handlePostComment}>Post</button>
      </div>
      <div className="comment-list">
        {comments.slice().reverse().map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.name}: {comment.comment}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
      );
    
}

export default CommentsSection;


// import React from 'react';

// function CommentsSection() {
//   return (
//     <div className="comments-section">
//       {/* Display user comments here */}
//       <div className="comment">
//         <p>User Comment 1</p>
//       </div>
//       <div className="comment">
//         <p>User Comment 2</p>
//       </div>
//       {/* Add more comments as needed */}
//     </div>
//   );
// }

// export default CommentsSection;