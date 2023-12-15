import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './style.css';

function Tabs() {
  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState('popular');

  const APIKEY = '8cc73deace87d0030f1c7700b02bbbcc';
  const APIURL = 'https://api.themoviedb.org/3/';

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
      });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="tabs-section">
      <div className="tab-buttons">
        <button className={activeTab === 'popular' ? 'active' : ''} onClick={() => handleTabClick('popular')}>Popular</button>
        <button className={activeTab === 'top_rated' ? 'active' : ''} onClick={() => handleTabClick('top_rated')}>Top Rated</button>
        <button className={activeTab === 'upcoming' ? 'active' : ''} onClick={() => handleTabClick('upcoming')}>Upcoming</button>
      </div>
      <div className="movie-cards">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}

export default Tabs;
