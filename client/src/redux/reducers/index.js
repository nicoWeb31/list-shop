import {combineReducers} from 'redux';
import todoReducer from './todo/todoReducer';
import usersReducer from './users/usersReducer';
import errorReducer from './errors/errorReducer'


export default combineReducers({
    todo: todoReducer,
    error: errorReducer,
    user: usersReducer
})