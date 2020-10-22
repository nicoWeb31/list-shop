import {v1 as uuid} from "uuid";
import {GET_TODOS,DELETE_TODO,ADD_TODO,TODO_LOADING} from '../../action/type'


const initialState = {
    todos: [],
    loading: false
}



export default (state = initialState, action) => {
    switch(action.type){
        case GET_TODOS : 
            return{
                ...state,
                todos: action.payload,
                loading: false
            }
        
        case DELETE_TODO :
            return {
                ...state,
                todos : state.todos.filter(todo => todo._id !== action.payload)
            }

        case ADD_TODO : 
        return {
            ...state,
            todos : [action.payload,...state.todos]
        }
        
        case TODO_LOADING :
            return{
                ...state,
                loading : true
            }

        default :
            return state

    }
}