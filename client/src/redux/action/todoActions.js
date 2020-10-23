import { GET_TODOS, DELETE_TODO, ADD_TODO, TODO_LOADING } from './type';
import axios from 'axios';

import {tokenConfig} from './authAction';
import {returnErrors} from './errorAction'


export const getTodos = () => dispatch => {

    //dispatch set loading a true
    dispatch(setTodoLoading())

    axios
        .get('/api/todos')
        .then(res =>
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


export const deleteTodo = id => (dispatch,getState)=> {


    axios.delete(`/api/todos/${id}`,tokenConfig(getState))
    .then(res=>
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
        
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const addTodo = todo => (dispatch,getState) => {

    axios
        .post('/api/todos',todo,tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setTodoLoading = () => {
    return {
        type: TODO_LOADING
    }
}
