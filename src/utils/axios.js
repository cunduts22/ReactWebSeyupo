import Axios from 'axios'

export const initializeAxios = () => {
    const token = localStorage.getItem('token')
    Axios.defaults.baseURL = 'http://localhost:4001/'
    if(token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}