import React, { Component } from 'react';
import logo from './doge.png';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dogs</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Test/>
        </p>
      </div>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <div>hello</div>
    );
  }
}

export default App;