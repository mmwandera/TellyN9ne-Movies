import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import './style.css';

function MovieTalk() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://telly9ne-movies-backend.onrender.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
      });
  }, []);

  const handlePostComment = () => {
    if (userName.trim() !== '' && newComment.trim() !== '') {
      const commentData = {
        name: userName,
        comment: newComment,
      };

      fetch('https://telly9ne-movies-backend.onrender.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })
        .then((response) => response.json())
        .then((data) => {
          setComments([...comments, data]);
          setNewComment('');
          setUserName('');
        })
        .catch((error) => console.error('Error posting comment:', error));
    }
  };

  const handleDeleteComment = (commentId) => {
    fetch(`https://telly9ne-movies-backend.onrender.com/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setComments(comments.filter((c) => c.id !== commentId));
        } else {
          console.error('Failed to delete comment from server.');
        }
      })
      .catch((error) => console.error('Error deleting comment:', error));
  };

  const commentsCardsToShow = comments.slice().reverse().map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment}
      onDeleteComment={handleDeleteComment}
    />
  ));

  return (
    <section className="movie-talk-section">
      <div className="comment-input-container">
        <div className="comment-input">
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Type your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="search-button" onClick={handlePostComment}>
            Post Comment
          </button>
        </div>
      </div>
      <div className="comment-list">
        {isLoading ? (
          <p>Loading comments...</p>
        ) : comments.length === 0 ? (
          <p>No comments available</p>
        ) : (
          commentsCardsToShow
        )}
      </div>
    </section>
  );
}

export default MovieTalk;
