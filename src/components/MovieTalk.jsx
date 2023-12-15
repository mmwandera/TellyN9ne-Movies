import React from 'react';
import CommentCard from './CommentCard';
import './style.css';
function MovieTalk() {
  return (
    <section className="movie-talk-section">
        <div className="comment-input-container">
            <div className="comment-input">
                <input
                    type="text"
                    placeholder="Your Name"
                />
                <textarea
                    placeholder="Type your comment here..."
                />
                <button>Post</button>
            </div>
        </div>
        <div className="comment-list">
            {/* List of Comment Cards with the latest comment appearing on top */}
        </div>
    </section>
  );
}

export default MovieTalk;