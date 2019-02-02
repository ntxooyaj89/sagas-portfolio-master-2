import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectRow extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API

    }


    


    render() {
        return (
        
           
            <tr>
                <td>{this.props.project.name}</td>
                <td>{this.props.project.description}</td>
                <td>{this.props.project.website}</td>
                <td>{this.props.project.github}</td>
                <td>{this.props.project.date_completed}</td>
                <td><img src={this.props.project.thumbnail} alt='placeholder image'></img></td>
                {/* <td>{this.props.project.name}</td> */}
            
               
            </tr>
            
        );
    }
}

export default connect()(ProjectRow);
