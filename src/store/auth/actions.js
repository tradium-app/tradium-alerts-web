import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR } from './actionTypes'

export const loginUser = (accessToken, history) => {
    return {
        type: LOGIN_USER,
        payload: { accessToken, history },
    }
}

export const loginSuccess = (user) => {
    console.log('printing user', user)
    return {
        type: LOGIN_SUCCESS,
        payload: { authUser: user },
    }
}

export const logoutUser = (history) => {
    return {
        type: LOGOUT_USER,
        payload: { history },
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
        payload: {},
    }
}

export const apiError = (error) => {
    return {
        type: API_ERROR,
        payload: error,
    }
}
