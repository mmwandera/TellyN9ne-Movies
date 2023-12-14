// Banner.jsx

import React, { useState, useEffect } from 'react';

function Banner() {
  const [movieData, setMovieData] = useState({
    backdropPath: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    title: "Killers of the Flower Moon",
    overview: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovieData = async (index) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/466420/recommendations?api_key=8cc73deace87d0030f1c7700b02bbbcc&language=en-US&page=${index + 1}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movie recommendations');
        }

        const data = await response.json();
        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

        setMovieData({
          backdropPath: randomMovie.backdrop_path,
          title: randomMovie.title,
          overview: randomMovie.overview,
        });
      } catch (error) {
        console.error('Error fetching movie recommendations:', error.message);
      }
    };

    // Fetch recommendations initially
    fetchMovieData(currentIndex);

    // Fetch new recommendations every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming there are 5 pages of recommendations
      fetchMovieData(currentIndex);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const bannerStyle = {
    position: 'relative',
    height: '500px', // Adjust the height as needed
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdropPath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    transition: 'background-image 1s ease-in-out', // Smooth transition effect
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  };

  const contentStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    zIndex: 1,
  };

  return (
    <section className="banner" style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div className="banner-content" style={contentStyle}>
        <div className="movie-info">
          <h1>{movieData.title}</h1>
          <p>{movieData.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
