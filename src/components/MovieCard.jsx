import React from 'react';
import './style.css';

function MovieCard({ movie }) {
  // Round off the rating to one decimal place
  const roundedRating = Math.round(movie.vote_average * 10) / 10;

  // Determine the color of the chip based on the rating range
  let chipColor;
  let chipText;

  if (roundedRating > 0) {
    if (roundedRating >= 7) {
      chipColor = 'green';
    } else if (roundedRating >= 6 && roundedRating <= 6.9) {
      chipColor = 'yellow';
    } else {
      chipColor = 'red';
    }
    chipText = roundedRating;
  } else {
    chipColor = 'greyish';
    chipText = 'Not Rated';
  }

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie Poster for ${movie.title}`} />
      <h3 style={{ color: '#00A9FF', marginBottom: '5px' }}>{movie.title}</h3>
      <p style={{ fontSize: '14px', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Rating:</span>
        <span className={`rating-chip ${chipColor}`}>{chipText}</span>
      </p>
      <p style={{ fontSize: '14px', marginBottom: '5px' }}>
        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Release Date:</span>
        <span style={{ marginLeft: '5px' }}>{movie.release_date}</span>
      </p>
      <p style={{ fontSize: '14px', marginBottom: '5px' }}>
        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>Overview:</span>
        <span style={{ marginLeft: '5px' }}>{movie.overview}</span>
      </p>
    </div>
  );
}

export default MovieCard;
