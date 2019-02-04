import React, { Component } from "react";
import { connect } from 'react-redux';
import AdminTable from './../AdminTable/AdminTable';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Admin extends Component {
   
    // this holds the input to push into database
    constructor(props) {
        super(props);
        this.state = {
            newProject:{
            name: '',
            description: '',
            // date_completed: '',
            website: '',
            tag_id: '',
            }
           
        }

    }

    componentDidMount() {
        this.getProject();
        this.getTags();
    }

    getTags = () => {
        console.log('this is get tags');
        const action = { type: 'FETCH_TAGS' };
        this.props.dispatch(action);
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
                website: event.target.value,
            }
        })
    }

    handleGithubUrl = (event) =>{
        this.setState({
            newProject: {
                ...this.state.newProject,
                gitHub: event.target.value,
            }
          

        })
    }

    handleDate = (event) =>{
        this.setState({
            ...this.state.newProject,
            data_completed: event.target.value,
        })
    }

    handleDescription = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                description: event.target.value,
            }
         

        })
    }

    selectTag = (event) =>{
        console.log('this is select tag');
        this.setState({
            newProject: {
                ...this.state.newProject,
                tag_id: event.target.value,
            }
        });
    }

    




    render() {

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
                {/* {JSON.stringify(this.props.reduxStore.tags)} */}
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
            <form onSubmit={this.addNewProject}>
                <input onChange={this.handleProject} placeholder="Name of project"/>
                <input onChange={this.handleProjectUrl} placeholder="project URL"/>
                <input onChange={this.handleGithubUrl}placeholder="gitHub URL"/>
                <input onChange={this.handleDate} placeholder="date completed"/>
                <input onChange={this.handleDescription}placeholder="Decription of project"/>
                <select onChange={this.selectTag} value ={this.state.newProject.tags}>
                <option value="">Select Tag</option>
                {this.props.reduxStore.tags.map((tag, i) =>{
                    return <option key={i} value={tag.id}>{tag.tag_name}</option>
                })}
                
                </select>

                <button type="submit">Submit</button>
            </form>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                             
                               
                            </tr>

                        </thead>
                        <tbody>
                            

                            {this.props.reduxStore.projects.map(project =>{
                                return (
                                    <AdminTable key={project.id} project={project}/>
                                )
                            })}
           
                
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