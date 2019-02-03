// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';


// class AdminTable extends Component {

//     componentDidMount() {
//         this.getProject();
//     }

//     getProject = () => {
//         const action = { type: 'FETCH_PORTFOLIO' };
//         this.props.dispatch(action);
//     } 


//     render(){
//         return(
//             <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Project Name</th>
//                         <th>Project Description</th>
//                         <th>Project webSite</th>
//                         <th>Project gitHub</th>
//                         <th>Project completed Date</th>
//                         <th>Project WireFrame</th>
//                     </tr>

//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
                       
//                     </tr>

//                 </tbody>
//             </table>
//         </div>
//         )
//     }

// }

// const mapReduxStoreToProps = (reduxStore) => ({
//     reduxStore
// });

// export default connect() (AdminTable);