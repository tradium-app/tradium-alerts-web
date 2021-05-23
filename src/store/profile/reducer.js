import { FETCH_PROFILE, PROFILE_ERROR, PROFILE_SUCCESS, UPDATE_PROFILE } from './actionTypes'

const initialState = {
    error: '',
    success: '',
}

const profile = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            state = { ...state }
            break
        case UPDATE_PROFILE:
            state = { ...state }
            break
        case PROFILE_SUCCESS:
            state = { ...state, success: action.payload, profile: action.payload.profile }
            break
        case PROFILE_ERROR:
            state = { ...state, error: action.payload }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default profile
