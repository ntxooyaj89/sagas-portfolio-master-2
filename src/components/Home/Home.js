import React, { Component } from "react";
import { connect } from 'react-redux';


class Home extends Component {





    render() {
        return (
            <div>
                <p>Project Home</p>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Home);