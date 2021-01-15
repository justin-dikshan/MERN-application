import { LOGIN_DISPATCH, LOGOUT_DISPATCH, CLEAR_PROFILES } from "./types";
import axios from "axios";
import loginUserError from './authErrorAction'

export const loginUser = (userData, history) => dispatch => {
    axios.post('http://localhost:5001/login', userData).then( res => {
            if (res.data.message){
                dispatch(loginUserError(res.data.message));
            }
            else{
                dispatch({type : LOGIN_DISPATCH, payload : res.data});
                history.push('/dashboard')
            }
        }
    ).catch( err => {
        dispatch(loginUserError(err))
    })

}

export const logOutUser = (history) => dispatch => {
    dispatch({type: LOGOUT_DISPATCH });
    dispatch({type: CLEAR_PROFILES });
    history.push('/');
}