import axios from 'axios'

export const auth = async (payload) => {
        return await axios({
        url: '/sign-in',
        method: 'post',
        data: payload
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const checkAuthentication = async () => {
    return await axios({
        url: `admin/user/${localStorage.getItem('userId')}`,
        method: 'GET'
    })
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const getDevices = async () => {
    return await axios({
        url: `admin/get-device/${localStorage.getItem('userId')}`,
        method: 'GET'
    })
    .then(response => ({response}))
    .catch(error => ({error}))
}