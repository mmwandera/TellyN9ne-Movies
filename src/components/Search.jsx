import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './style.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const APIURL = 'https://api.themoviedb.org/3/';
  const APIKEY = '8cc73deace87d0030f1c7700b02bbbcc';

  const handleSearch = () => {
    // Make a new API request for searching movies
    fetch(`${APIURL}search/movie?api_key=${APIKEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFilteredMovies(data.results);
      });
  };

  return (
    <section className="search-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results-movie-cards">
        {(
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </section>
  );
}

export default Search;
