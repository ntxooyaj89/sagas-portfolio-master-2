import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PORTFOLIO', getPortfolio);
    yield takeEvery('FETCH_TAGS', getTags);

}

function* getTags(){
    try{
        const tagsResponse = yield axios.get('/portfolio/tags');
        const nextAction = {type: 'SET_TAGS', payload: tagsResponse.data};
        // this is information will be sent to our original reducer
        // that info will wait there to till a component wants the info...
        yield put(nextAction);
    }catch(error){
        console.log('There is error in getTag saga reducer')
    }
}

function* getPortfolio(){
    try{
        const projectResponse = yield axios.get('/portfolio');
        const nextAction = {type: 'SET_PROJECTS', payload: projectResponse.data};
        // this dispatch the information to our original reducer...
        yield put(nextAction);
    }catch(error){
        console.log('error in get project Saga reducer');
    }
}



// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
