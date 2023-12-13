import React from 'react';
import './style.css';
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={`Movie Poster for ${movie.title}`} />
      <h3>{movie.title}</h3>
      <p>Runtime: {movie.runtime} mins</p>
    </div>
  );
}

export default MovieCard;