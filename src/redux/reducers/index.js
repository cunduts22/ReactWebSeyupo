import {combineReducers} from 'redux'
import userReducers from './user.reducers'

const allReducers = combineReducers({
    userReducers
})

export default allReducers