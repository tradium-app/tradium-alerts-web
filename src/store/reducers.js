import { combineReducers } from 'redux'

import Login from './auth/reducer'
import Profile from './profile/reducer'
import Home from './home/reducer'

const rootReducer = combineReducers({
    Login,
    Profile,
    Home,
})

export default rootReducer
