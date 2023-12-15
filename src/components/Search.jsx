// components/Search/Search.jsx
import React from 'react';
import MovieCard from './MovieCard';
import './style.css';

function Search() {
  return (
    <section className="search-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies"
        />
        <button>Search</button>
      </div>
      <div className="search-results-movie-cards">
        {/* Movie cards in a carousel form */}
      </div>
    </section>
  );
}

export default Search;
