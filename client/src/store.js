import {createStore, applyMiddleware, compose}from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';


const initialState = {};
const middlweare = [thunk];

const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middlweare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
