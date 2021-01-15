import { PROFILES_LOADING, PROFILE_LOAD_ERROR, PROFILE_LOAD, CLEAR_PROFILES } from "../Actions/types";

const initialState = {
    loading : false,
    profiles : null
}

export default function (state=initialState, action) {
    switch (action.type) {
        case PROFILES_LOADING:
            return {
                ...state,
                loading: true
            }
        case PROFILE_LOAD:
            return {
                ...state,
                loading: false,
                profiles: action.payload.data
            }
        case CLEAR_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: null
            }
        default:
            return state
    }
}