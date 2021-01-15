import { LOGIN_FAIL } from "../Actions/types";

const initialState = {

}

export default function (state=initialState, action) {
    switch (action.type) {
        case LOGIN_FAIL:
            return {
                errors: action.payload
            }
        default:
            return state;
    }
}