import Axios from 'axios'

export const initializeAxios = () => {
    const token = localStorage.getItem('token')
    Axios.defaults.baseURL = "https://seyupo-api.openode.io/";
    if(token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}