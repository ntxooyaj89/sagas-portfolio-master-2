import React, { Component } from "react";
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class AdminTable extends Component {

    componentDidMount(){
        this.getProject();
    }

    getProject = () => {
        const action = { type: 'FETCH_PORTFOLIO' };
        this.props.dispatch(action);
    } 


    removeProject = () =>{
        console.log('this remove my project');
        const action = {
            type: 'DELETE_PROJECT',
            payload: {projectId: this.props.project.id}
        }
        this.props.dispatch(action)

    }


    render() {
        return (

            <tr>
                <td>{this.props.project.name}</td>
                <td>
                    <button onClick ={this.removeProject}>Delete project</button>
                </td>
            </tr>




        )
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect()(AdminTable);