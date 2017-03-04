import React from 'react';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';

import ClwNav from './ClwNav';
import ClwWorkspace from './ClwWorkspace';


const Clw = () => {
  return (
    <main id="clw">
      <ClwNav />
      <ClwWorkspace />
    </main>
  );
};

export default Clw;
