import React from 'react';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';

import HomeNav from './HomeNav';
import HomeWorkspace from './HomeWorkspace';


const Home = () => {
  return (
    <main>
      <HomeNav />
      <HomeWorkspace />
    </main>
  );
};

export default Home;
