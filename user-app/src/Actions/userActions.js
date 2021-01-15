import { PROFILE_LOAD, PROFILE_LOAD_ERROR, PROFILES_LOADING } from "./types";
import axios from "axios";

export const profileFetch = () => dispatch => {
    dispatch({type: PROFILES_LOADING});
    axios.get('http://localhost:5001/api/users').then( profiles => {
        dispatch({type: PROFILE_LOAD, payload : profiles})
    }).catch( err => {
        dispatch({type: PROFILE_LOAD_ERROR})
    })
}