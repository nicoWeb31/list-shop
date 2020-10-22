import {GET_ERROS,CLEAR_ERRORS} from './type';

//return err
export const returnErrors = (message,status,id = null) =>{
    return {
        type: GET_ERROS,
        payload:{message,status,id}
    }
}


export const  clearError = ()=>{
    return {
        type: CLEAR_ERRORS
    }
}