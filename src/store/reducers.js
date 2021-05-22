import { combineReducers } from 'redux'

import Login from './auth/login/reducer'

const rootReducer = combineReducers({
    Login,
})

export default rootReducer
