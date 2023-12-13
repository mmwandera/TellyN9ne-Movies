
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';



function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/popular-movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <PopularMoviesWrapper>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} className="movie-card" />
      ))}
    </PopularMoviesWrapper>
  );
}

export default PopularMovies;
