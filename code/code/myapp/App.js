import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
import Welcome from './Welcome.js'

export  default class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name='Andrew'/>
        <Welcome name='bob'/>
        <header className="App-header">
          <h1>here is reactjs</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//export default App;
