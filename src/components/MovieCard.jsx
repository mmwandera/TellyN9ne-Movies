import React from 'react';
import './style.css';

function MovieCard ({movie}) {
    return(
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie Poster for ${movie.title}`} />
            <h3>{movie.title}</h3>
            <h5>Release Date:</h5>
            <p>{movie.release_date}</p>
            <h5>Rating:</h5>
            <p>{movie.vote_average}</p>
        </div>
    )
}

export default MovieCard