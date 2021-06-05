import { combineReducers } from 'redux'
import Login from './auth/reducer'
import Profile from './profile/reducer'
import Home from './home/reducer'
import SearchReducer from '../pages/Search/store/reducer'

import { LOGOUT_USER } from './auth/actionTypes'

const appReducer = combineReducers({
    Login,
    Profile,
    Home,
    SearchReducer,
})

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = initialState
    }

    return appReducer(state, action)
}

export default rootReducer
