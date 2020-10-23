import { GET_TODOS, DELETE_TODO, ADD_TODO, TODO_LOADING } from './type';
import axios from 'axios';


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

}


export const deleteTodo = id => dispatch=> {


    axios.delete(`/api/todos/${id}`)
    .then(res=>
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
        
    )

}

export const addTodo = todo => dispatch => {

    axios
        .post('/api/todos',todo)
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        )

}

export const setTodoLoading = () => {
    return {
        type: TODO_LOADING
    }
}
