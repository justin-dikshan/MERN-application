import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authErrorReducer from './errorReducer'
import userReducer from "./userReducer";

export default combineReducers({
    auth : authReducer,
    errors : authErrorReducer,
    profiles : userReducer
})