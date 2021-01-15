import { LOGIN_FAIL } from "./types";

const loginUserError = (userdata) => {
    return {
        type : LOGIN_FAIL,
        payload :userdata
    }
}

export default loginUserError;