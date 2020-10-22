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


//check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading 
    dispatch({ type: USER_LOADING })

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

    axios.get('/api/auth/user', token)
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