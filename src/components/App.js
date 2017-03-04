import React from 'react';
import {
  BrowserRouter as Router,
  Match,
  Miss
} from 'react-router-dom';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';

import Home from './Home';
import Elm from './Elm';
import Clw from './Clw';
import NotFound from './NotFound';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Match exactly pattern="/" component={ Home }/>
          <Match pattern="/elm" component={ Elm }/>
          <Match pattern="/clw" component={ Clw }/>
          <Miss component={ NotFound }/>
        </div>
      </Router>
    );
  }
}

export default App;
