import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';

function TabButton({ label, tab, activeTab, onClick }) {
  return (
    <Link to={`/${tab}`}>
      <button className={activeTab === tab ? 'active' : ''} onClick={() => onClick(tab)}>
        {label}
      </button>
    </Link>
  );
}

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
    <Router>
      <section className="tabs-section">
        <div className="tab-buttons">
          <TabButton label="Popular" tab="popular" activeTab={activeTab} onClick={handleTabClick} />
          <TabButton label="Top Rated" tab="top_rated" activeTab={activeTab} onClick={handleTabClick} />
          <TabButton label="Upcoming" tab="upcoming" activeTab={activeTab} onClick={handleTabClick} />
        </div>

        {/* Define routes for each tab */}
        <Route path="/popular" render={() => <div className="movie-cards">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>} />
        <Route path="/top_rated" render={() => <div className="movie-cards">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>} />
        <Route path="/upcoming" render={() => <div className="movie-cards">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>} />
      </section>
    </Router>
  );
}

export default Tabs;
