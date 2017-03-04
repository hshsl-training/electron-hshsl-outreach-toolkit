import React from 'react';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';

import ElmNav from './ElmNav';
import ElmWorkspace from './ElmWorkspace';


const Elm = () => {
  return (
    <main id="elm">
      <ElmNav />
      <ElmWorkspace />
    </main>
  );
};

export default Elm;
