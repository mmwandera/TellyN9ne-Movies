// PopularMovies.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const APIKEY = '8cc73deace87d0030f1c7700b02bbbcc';
  const APIURL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    fetch(`${APIURL}movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setFilteredMovies(data.results);
      })
  }, []); 

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="popular-movies">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="movie-cards">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
