import { AUTH_SUCCESS, CHECK_AUTH, USER_SESSION, RESULT_GET_DEVICES } from "../types";

const initailState = {
    auth: false,
    status: 401,
    devices: []
}

const userReducers = (state = initailState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS :
            return {
                ...state,
                ...action.payload
            }
        case CHECK_AUTH :
            return {
                ...state,
                ...action.payload
            }
        case USER_SESSION: 
            return {
                ...state,
                user: {...action.payload}
            }
        case RESULT_GET_DEVICES:
            return {
                ...state,
                devices: action.devices
            }
        default :
            return state
    }
}

export default userReducers