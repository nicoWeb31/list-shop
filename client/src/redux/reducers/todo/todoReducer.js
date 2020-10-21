import {v1 as uuid} from "uuid";
import {GET_TODOS,DELETE_TODO,ADD_TODO} from '../../action/type'


const initialState = {
    todos: [
        {id:uuid(),name:'jardin',status:false},
        {id:uuid(),name:'cuisine',status:false},
        {id:uuid(),name:'ranger',status:true},
        {id:uuid(),name:'acheter un turc',status:false},
        {id:uuid(),name:'autre',status:false}
    ]
}



export default (state = initialState, action) => {
    switch(action.type){
        case GET_TODOS : 
            return{
                ...state
            }

        default :
            return state

    }
}