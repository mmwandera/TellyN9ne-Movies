// ScrollToTopButton.jsx

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show the button when the user scrolls down, hide it when at the top
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
}

export default ScrollToTopButton;
