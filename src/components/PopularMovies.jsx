import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('popular');

  const APIKEY = '8cc73deace87d0030f1c7700b02bbbcc';
  const APIURL = 'https://api.themoviedb.org/3/';

  // https://api.themoviedb.org/3/movie/popular?api_key=8cc73deace87d0030f1c7700b02bbbcc&language=en-US&page=1

  useEffect(() => {
    fetchMovies(activeTab);
  }, [activeTab]);

  const fetchMovies = (tab) => {
    let url;

    switch (tab) {
      case 'top_rated':
        url = `${APIURL}movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
        break;
      case 'upcoming':
        url = `${APIURL}movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
        break;
      default:
        url = `${APIURL}movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
        break;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setFilteredMovies(data.results);
      });
  };

  const handleSearch = () => {
    // Make a new API request for searching movies
    fetch(`${APIURL}search/movie?api_key=${APIKEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setFilteredMovies(data.results);
      });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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

      {!searchTerm && ( // Conditionally render tabs only when there's no active search
        <div className="tabs">
          <button className={activeTab === 'popular' ? 'active' : ''} onClick={() => handleTabChange('popular')}>Popular</button>
          <button className={activeTab === 'top_rated' ? 'active' : ''} onClick={() => handleTabChange('top_rated')}>Top Rated</button>
          <button className={activeTab === 'upcoming' ? 'active' : ''} onClick={() => handleTabChange('upcoming')}>Upcoming</button>
        </div>
      )}

      <div className="movie-cards">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;

