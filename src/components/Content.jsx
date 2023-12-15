import React from 'react';
import Tabs from './Tabs';
import MovieTalk from './MovieTalk';
import './style.css';

function Content() {
  return (
    <section className="content">
      <Tabs />
      <MovieTalk />
    </section>
  );
}

export default Content;
