// components/Header/Header.jsx
import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={require('./assets/tm-logo.png')} alt="Telly9ne Movies Logo" />
        </div>
    </header>
  );
}

export default Header;
