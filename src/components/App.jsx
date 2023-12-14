
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Content />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
