import React, { Component } from 'react';
import './App.css';
import Home from './../Home/Home';
import Admin from './../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Home/>
        <Admin/>
      </div>
    );
  }
}

export default App;
