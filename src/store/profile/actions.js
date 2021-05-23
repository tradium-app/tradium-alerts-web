import { FETCH_PROFILE, PROFILE_SUCCESS, PROFILE_ERROR, UPDATE_PROFILE } from './actionTypes'

export const fetchProfile = (userId) => {
    return {
        type: FETCH_PROFILE,
        payload: { userId },
    }
}

export const updateProfile = (user) => {
    return {
        type: UPDATE_PROFILE,
        payload: { user },
    }
}

export const profileSuccess = (profile) => {
    return {
        type: PROFILE_SUCCESS,
        payload: { profile },
    }
}

export const profileError = (error) => {
    return {
        type: PROFILE_ERROR,
        payload: { error },
    }
}
