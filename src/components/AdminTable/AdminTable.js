import React, { Component } from "react";
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';


class AdminTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: { maxWidth: 10, },
            title: { fontSize: 10 },
            media: { height: 140 }
        }

    }


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

            <tr className="classes-card">
                <Card className={this.state.card}>
                <td>{this.props.project.name}</td>
                <td>
                    <button onClick ={this.removeProject}>Delete project</button>
                </td>
                </Card>
            </tr>




        )
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect()(AdminTable);