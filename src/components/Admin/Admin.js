import React, { Component } from "react";
import { connect } from 'react-redux';
// import AdminTable from './../AdminTable/AdminTable';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Admin extends Component {
   
    // this holds the input to push into database
    constructor(props) {
        super(props);
        this.state = {
            newProject:{
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            }
           
        }

    }

    componentDidMount() {
        this.getProject();
    }

    getProject = () => {
        const action = { type: 'FETCH_PORTFOLIO' };
        this.props.dispatch(action);
    } 




    addNewProject = (event) =>{
        console.log('this is handleClick');
        event.preventDefault();
        this.props.dispatch({type:'ADD_PROJECT', payload: this.state.newProject})
    }

    handleProject = (event) =>{
        this.setState({
            newProject: {
                ...this.state.newProject,
                name: event.target.value,
            }

        })
        
    }

    handleProjectUrl = (event) =>{
        this.setState({
            newProject: {
                ...this.state.newProject,
                description: event.target.value,
            }
        })
    }

    handleGithubUrl = (event) =>{
        this.setState({
            newProject: {
                ...this.state.newProject,
                thumbnail: event.target.value,
            }
          

        })
    }

    handleDescription = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                website: event.target.value,
            }
         

        })
    }

    




    render() {

        let projectName = this.props.reduxStore.projects.map(project => {
            return (
            
                    
                <tr key={project.id}>{project.name}</tr>
               
            
            
               
            )
               
        })

        return (
            <div>
                <Router>
                <ul>
                    <li>
                            <Link to="/project_table">Back to project Home</Link>
                    </li>

                </ul>
                </Router>
            <header>
                <h2>Admin</h2>
            </header>
            {/* <AdminTable/> */}
            {/* {JSON.stringify(this.props.reduxStore.projects)} */}
            <form onSubmit={this.addNewProject}>
                <input onChange={this.handleProject} placeholder="Name of project"/>
                <input onChange={this.handleProjectUrl} placeholder="project URL"/>
                <input onChange={this.handleGithubUrl}placeholder="gitHub URL"/>
                <input onChange={this.handleDescription}placeholder="Decription of project"/>

                <button type="submit">Submit</button>
            </form>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Action</th>
                               
                            </tr>

                        </thead>
                        <tbody>

                            {projectName}
                        
                           
                           
                          
                          

                        </tbody>
                    </table>
                </div>
           
                
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Admin);