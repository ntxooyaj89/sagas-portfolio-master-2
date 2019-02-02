import React, { Component } from 'react';
import './App.css';
import ProjectTable from './../ProjectTable/ProjectTable';
import Admin from './../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <ProjectTable/>
        {/* <Admin/> */}
      </div>
      
    );
  }
}

export default App;
