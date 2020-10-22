import {GET_ERROS, CLEAR_ERRORS} from '../../action/type' 

const initialState = {
    message :{},
    status : null,
    id: null
}



export default (state = initialState, action) =>{
    switch(action.type){

        case GET_ERROS : 
            return{
                message : action.payload.message,
                status: action.payload.status,
                id: action.payload.id

            }

        case CLEAR_ERRORS :
            return{
                message : {},
                status: null,
                id: null

            }    

        default:
            return state;
    }
}