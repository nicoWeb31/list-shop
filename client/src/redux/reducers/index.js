import {combineReducers} from 'redux';
import todoReducer from './todo/todoReducer';
import usersReducer from './auth/authReducer';
import errorReducer from './errors/errorReducer'


export default combineReducers({
    todo: todoReducer,
    error: errorReducer,
    auth: usersReducer
})