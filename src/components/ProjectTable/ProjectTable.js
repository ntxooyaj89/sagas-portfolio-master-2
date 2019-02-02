import React, { Component } from "react";
import { connect } from 'react-redux';
import ProjectRow from './ProjectRow/ProjectRow';


class ProjectTable extends Component {
    componentDidMount() {
        this.getPortfolio();
    }

    getPortfolio = () => {
        const action = { type: 'FETCH_PORTFOLIO' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h3>My Portfolio</h3>
                <table className="project">
                    <thead>
                        <tr>

                            <th>Project Name</th>
                            <th>Project Description</th>
                            <th>Project webSite</th>
                            <th>Project gitHub</th>
                            <th>Project completed Date</th>
                            <th>Project WireFrame</th>
                        </tr>
                    </thead>
                    <tbody>



                        {this.props.reduxStore.projects.map(project => {
                            return (
                                <ProjectRow key={project.id} project={project} />
                            )



                        })}

                    </tbody>
                </table>
            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ProjectTable);