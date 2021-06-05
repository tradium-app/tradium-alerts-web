import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR } from './actionTypes'
import { REHYDRATE } from 'redux-persist/lib/constants'

const initialState = {
    error: '',
    loading: false,
    authUser: null,
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return { ...state, authUser: action.payload?.Login.authUser }
        case LOGIN_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authUser: action.payload.authUser,
            }
            break
        case LOGOUT_USER:
            state = { ...state, loading: false }
            break
        case LOGOUT_USER_SUCCESS:
            state = { ...state }
            break
        case API_ERROR:
            state = { ...state, error: action.payload, loading: false }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default login
