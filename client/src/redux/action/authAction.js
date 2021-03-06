import axios from 'axios';
import { returnErrors } from './errorAction'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from './type';


//set up config------------------------------------

export const tokenConfig = getState =>{
        //get token from localStorage via state auth and token 
        const token = getState().auth.token

        //headers axios 
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        //si un token existe je l'utilise
        if (token) {
            config.headers['x-auth-token'] = token
        }

        return config
}


//----------------check token and load user-------------
export const loadUser = () => (dispatch, getState) => {


    const configHeader = tokenConfig(getState);

    //user loading 
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', configHeader)
        .then(res => dispatch({
            type: USER_LOADING,
            payload: res.data
        }))
        .catch(err=>{
            //dispatch to errAction
            dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type:AUTH_ERR
            })
        })
    }


//-----------------register----------------
export const register = ({name, email, password}) => dispatch =>{

    //header
    const configHeader = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({name,email,password})
    axios.post('/api/users',body,configHeader)
    .then(res=> dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err=>{

        dispatch(returnErrors(err.response.data,err.response.status, 'REGISTER_FAIL'))
        dispatch({
            type:REGISTER_FAIL,

        })

    })

}

//---------------logout----------------
export const logout = () =>{

    return {
        type: LOGOUT_SUCCESS
    }

}

//------------login user ------------------------
export const login = ({email,password}) => dispatch =>{
    //header
    const configHeader = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({email,password})
    axios.post('/api/auth',body,configHeader)
    .then(res=> dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err=>{

        dispatch(returnErrors(err.response.data,err.response.status, 'LOGIN_FAIL'))
        dispatch({
            type:LOGIN_FAIL,

        })

    })
}



