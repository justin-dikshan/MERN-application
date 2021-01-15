import { LOGIN_DISPATCH, LOGOUT_DISPATCH } from "../Actions/types";


const initialState = {
    isAuthenticated : false,
    user : null,
}

export default function(state=initialState, action){
    switch (action.type) {
        case LOGIN_DISPATCH:
            return {
                ...state,
                isAuthenticated: true,
                user : action.payload
            }
        case LOGOUT_DISPATCH:
            return {
                ...state,
                isAuthenticated: false,
                user : null
            }
        default:
            return state;
    }
}