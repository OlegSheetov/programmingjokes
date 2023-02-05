import React, { Component } from 'react';
import './App.css';
import DisplayJoke from './components/DisplayJoke/DisplayJoke'

class App extends Component {
  render() {
    return (
      <div className="App">
          <DisplayJoke/>
      </div>
    );
  }
}

export default App;
