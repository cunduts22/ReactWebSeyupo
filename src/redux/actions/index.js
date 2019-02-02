import { SIGN_IN, AUTH_SUCCESS, AUTH_FAILED, CHECK_AUTH, GET_DEVICES, RESULT_GET_DEVICES } from "../types";

export const sign_in = (payload) => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const auth_success = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload
    }
}

export const auth_failed = (payload) => {
    return {
        type: AUTH_FAILED,
        payload
    }
}

export const check_auth = () => {
    return {
        type: CHECK_AUTH
    }
}

export const getAllDevices = () => {
    return {
        type: GET_DEVICES
    }
}

export const resultDevices = (payload) => {
    return {
        type: RESULT_GET_DEVICES,
        payload
    }
}