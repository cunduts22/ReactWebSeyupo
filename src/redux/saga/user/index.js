import { put, call, takeLatest } from "redux-saga/effects";
import { auth, checkAuthentication, getDevices } from "./user.api";
import { SIGN_IN, AUTH_SUCCESS, AUTH_FAILED, CHECK_AUTH, USER_SESSION, RESULT_GET_DEVICES, GET_DEVICES } from "../../types";


function *login (action) {
    try {
        const {response, error} = yield call (auth, action.payload)
        if(response) {
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('userId', response.data._id)
            yield put({type: AUTH_SUCCESS, payload: {auth: true, status: 200}})
        }
        yield put({ type: AUTH_FAILED, payload: {auth: false, status: 401, ...error.response.data} })

    } catch (error) {}
}

function* checkAuth(action) {
    try {
        const { response, error } = yield call(checkAuthentication)
        if(response) {
            yield put({type: AUTH_SUCCESS, payload: {auth: true, status: 200}})
            yield put({
                type: USER_SESSION, payload: { ...response.data[0] }
            })
        }
        yield put({type: AUTH_FAILED, payload: {auth: false, status: 401, ...error.response.data}})
    } catch (error) {}
}

function* GetDevice() {
    try {
        const {response, error} = yield call(getDevices)
        if(response) {
            yield put({type: RESULT_GET_DEVICES, devices: response.data.listDevice})
        }
        yield put({type: RESULT_GET_DEVICES, message: error.response.data.message})
    } catch (error) {}
}

export function* userSaga() {
    yield takeLatest(SIGN_IN, login)
    yield takeLatest(CHECK_AUTH, checkAuth)
    yield takeLatest(GET_DEVICES, GetDevice)
}