import React, { Component } from 'react';

import Header from './components/organisms/Header';
import Body from './components/organisms/Body';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
