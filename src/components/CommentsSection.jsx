import React, { useState } from 'react';
import './style.css';

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePostComment = () => {
    if (userName.trim() !== '' && newComment.trim() !== '') {
      const commentWithUser = `${userName}: ${newComment}`;
      setComments((prevComments) => [commentWithUser, ...prevComments]);
      setNewComment('');
      setUserName('');
    }
  };

  return (
    <CommentsSectionWrapper>
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
        {/* Display user comments here */}
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </CommentsSectionWrapper>
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
