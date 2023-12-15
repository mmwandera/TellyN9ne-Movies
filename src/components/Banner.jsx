// components/Banner/Banner.jsx
import React from 'react';
import './style.css';

function Banner() {
  return (
    <section className="banner">
        <div className="movie-info">
          <h1>{/* movieData.title */}</h1>
          <p>{/* movieData.overview */}</p>
        </div>
    </section>
  );
}

export default Banner;
