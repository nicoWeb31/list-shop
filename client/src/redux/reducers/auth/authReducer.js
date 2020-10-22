import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from '../../action/type'


const initialState = {
    token: localStorage.getItem('token'),
    isAthutenticated: null,
    isLoading: false,
    user:null

}

export default (state =initialState, action)=>{

    switch(action.type){

        case USER_LOADING:
            return{
                ...state,
                isLoading:true,

            }

        case USER_LOADED:
            return{
                ...state,
                isAthutenticated:true,
                isLoading:false,
                user: action.payload
            }
        
        case LOGIN_SUCCESS :
            return {
                ...state,
                ...action.payload,
                isAthutenticated:true,
                isLoading:false,
            }

        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAthutenticated:true,
                isLoading:false,
            }    

        case AUTH_ERR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user:null,
                isAthutenticated:false,
                isLoading:false,
            }       

        default:
            return state;
    }

}