import React, { Component } from 'react';
import './App.css';
import ProjectTable from './../ProjectTable/ProjectTable';
import Admin from './../Admin/Admin';
import Header from './../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
     <div className="App">
        <Header />
     
   
        
        <ProjectTable/>
        {/* <Admin/> */}
      </div>
      
    );
  }
}

export default App;
