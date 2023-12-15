import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './style.css';

function Tabs() {

    const [movies, setMovies] = useState([]);
    
    const APIURL = 'https://api.themoviedb.org/3/';
    const APIKEY = '8cc73deace87d0030f1c7700b02bbbcc';

    useEffect(() => {
        fetch(`${APIURL}movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data =>{
                // console.log(data);
                setMovies(data.results);

            })
    })

    return (
        <section className="tabs-section">
            <div className="tab-buttons">
                <button>Popular</button>
                <button>Top Rated</button>
                <button>Upcoming</button>
            </div>
            <div className="movie-cards">
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </section>
    );
}

export default Tabs;