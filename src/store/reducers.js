import { combineReducers } from 'redux'

import Login from './auth/login/reducer'
import Profile from './auth/profile/reducer'

const rootReducer = combineReducers({
    // public
    Login,
    Profile,
})

export default rootReducer
