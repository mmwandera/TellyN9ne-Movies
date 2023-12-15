import React from 'react';
import './style.css';

function CommentCard (){
    return(
        <div className="comment-card">
            <div className="comment-info">
                <h3>{/* name */}</h3>
                <p>{/* comment */}</p>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default CommentCard