import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/basscss@7.1.1.min.css';
import './css/hot.css';

import Home from './components/Home';
import Elm from './components/Elm';
import Clw from './components/Clw';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/elm" component={Elm} />
        <Match pattern="/clw" component={Clw} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
