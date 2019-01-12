import { AUTH_SUCCESS, CHECK_AUTH, USER_SESSION } from "../types";

const initailState = {
    auth: false,
    status: 401
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
        default :
            return state
    }
}

export default userReducers