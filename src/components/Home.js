import React, { Component } from 'react';
import HomeNav from './HomeNav';
import HomeWorkspace from './HomeWorkspace';


class Home extends Component {
  render() {
    return (
      <main>
        <HomeNav />
        <HomeWorkspace />
      </main>
    );
  }
}

export default Home;
