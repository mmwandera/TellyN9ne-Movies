import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Search from './Search';
import Content from './Content';
import './style.css';
function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Search />
      <Content />
    </div>
  );
}

export default App;
