import { SEARCH_POLLS, SEARCH_POLLS_SUCCESS } from './actionTypes'

const initialState = {
    error: '',
    loading: false,
    searchText: '',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POLLS:
            state = {
                ...state,
                loading: true,
                searchText: action.payload.searchText,
            }
            break
        case SEARCH_POLLS_SUCCESS:
            state = {
                ...state,
                loading: false,
                searchPollsResult: action.payload.searchPollsResult,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default searchReducer
