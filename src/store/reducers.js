import { combineReducers } from 'redux'

import Login from './auth/reducer'
import Profile from './profile/reducer'

const rootReducer = combineReducers({
    Login,
    Profile,
})

export default rootReducer
