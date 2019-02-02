import React, { Component } from "react";
import { connect } from 'react-redux';



class Admin extends Component {




    render() {
        return (
            <div>
                <p>Admin</p>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Admin);