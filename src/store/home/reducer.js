import { FETCH_TOP_TRENDING_POLLS, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes'

const initialState = {
    error: '',
    loading: false,
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_TRENDING_POLLS:
            state = {
                ...state,
                loading: true,
            }
            break
        case FETCH_SUCCESS:
            state = {
                ...state,
                loading: false,
                topPolls: action.payload.topPolls,
            }
            break
        case FETCH_ERROR:
            state = { ...state, loading: false, error: action.payload.error }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default home
