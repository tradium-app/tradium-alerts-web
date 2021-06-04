import { FETCH_TOP_TRENDING_POLLS, FETCH_SUCCESS, FETCH_ERROR, FETCH_TOP_TAGS, FETCH_TOP_TAGS_SUCCESS, FETCH_TOP_TAGS_ERROR } from './actionTypes'

const initialState = {
    error: '',
    loading: false,
    searchText: '',
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
        case FETCH_TOP_TAGS:
            state = {
                ...state,
                searchText: action.payload.searchText,
                loading: true,
            }
            break
        case FETCH_TOP_TAGS_SUCCESS:
            state = {
                ...state,
                loading: false,
                topTags: action.payload.topTags,
            }
            break
        case FETCH_TOP_TAGS_ERROR:
            state = { ...state, loading: false, error: action.payload.error }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default home
