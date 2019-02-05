import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectRow.css'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
// hashRouter create the links...
import { HashRouter as Router, Route } from 'react-router-dom';
// import classes from '*.module.sass';
import { CardContent } from '@material-ui/core';

// import ProjectInfo from './../../ProjectInfo/ProjectInfo';

class ProjectRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: { maxWidth: 10, },
            title: { fontSize: 10 },
            media: { height: 140 }
        }

    }


    componentDidMount() {
        this.getTags();
    }


    getTags = () => {
        console.log('this is get tags');
        const action = { type: 'FETCH_TAGS' };
        this.props.dispatch(action);
    }




    render() {

        
        return (


            <tr className="classes-card">
                <Card className={this.state.card}>
                    <CardActionArea>

                        <CardContent>
                            {/* {JSON.stringify(this.props.reduxStore.projects)} */}
                            <td>{this.props.project.name}</td>
                            <td>{this.props.project.description}</td>
                            <td><a href={this.props.project.website}>Go to project</a></td>
                            <td><a href={this.props.project.github}>Go to Github</a></td>
                            <td>{this.props.project.date_completed}</td>
                            <td>{this.props.project.tag_name}</td>
                            
                        </CardContent>

                        <CardMedia className={this.state.media}
                            // image={this.props.project.thumbnail}
                            title={this.props.project.name} />
                        <td><img src={this.props.project.thumbnail} alt='placeholder of my project thumbnail'></img></td>


                    </CardActionArea>
                </Card>



                {/* {JSON.stringify(this.props.reduxStore.tags)} */}
            </tr>


        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(ProjectRow);
