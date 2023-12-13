import React from 'react';
import PopularMovies from './PopularMovies';
import CommentsSection from './CommentsSection';
import './style.css';
function Content() {
    return (
      <section className="content">
        <div className="left-column">
          <h2>Popular Movies and Shows</h2>
          <PopularMovies />
        </div>
        <div className="right-column">
          <h2>Comments Section</h2>
          <CommentsSection />
        </div>
      </section>
    );
  }
  
  export default Content;