// components/CommentsSection.js - Component for displaying user comments

import React, { useState } from 'react';

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [newComment, ...prevComments]);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
        />
        <button onClick={handlePostComment}>Post</button>
      </div>
      <div className="comment-list">
        {/* Display user comments here */}
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
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