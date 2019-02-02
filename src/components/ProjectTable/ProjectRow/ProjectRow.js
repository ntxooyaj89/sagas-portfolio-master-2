import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectRow extends Component {
    componentDidMount() {
        this.getTags();
    }


    getTags = () => {
        console.log('this is get tags');
        const action = { type: 'FETCH_TAGS' };
        this.props.dispatch(action);
    }


    render() {

        this.props.reduxStore.tags.map(tagName =>{
            return(
                <td key={tagName.id}>{tagName.name}</td>
            )
        })


        return (


            <tr>
                <td>{this.props.project.name}</td>
                <td>{this.props.project.description}</td>
                <td>{this.props.project.website}</td>
                <td>{this.props.project.github}</td>
                <td>{this.props.project.date_completed}</td>
                <td><img src={this.props.project.thumbnail} alt='placeholder of my project'></img></td>
                

                {JSON.stringify(this.props.reduxStore.tags)}


            </tr>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(ProjectRow);
