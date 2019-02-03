import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProjectTable from './../ProjectTable/ProjectTable';
// import AdminHeader from '../Admin/AdminHeader';
import Admin from './../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
     <div className="App">
     <Router>
       <div>
            <Route exact path ="/project_table" component={ProjectTable} />
            <Route exact path="/admin" component={Admin}/>
       </div>
      </Router>
      </div>
      
    );
  }
}

export default App;
