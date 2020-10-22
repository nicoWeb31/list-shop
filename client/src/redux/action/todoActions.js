import {GET_TODOS,DELETE_TODO,ADD_TODO} from './type';

export const getTodos = () =>{
    return {
        type: GET_TODOS
    }
}


export const deleteTodo = id =>{
    return {
        type : DELETE_TODO,
        payload: id
    }
}
