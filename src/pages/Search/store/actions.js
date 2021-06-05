import { SEARCH_POLLS, SEARCH_POLLS_ERROR, SEARCH_POLLS_SUCCESS } from './actionTypes'

export const searchPolls = (searchText) => {
    return {
        type: SEARCH_POLLS,
        payload: { searchText },
    }
}

export const searchPollsSuccess = (searchPollsResult) => {
    return {
        type: SEARCH_POLLS_SUCCESS,
        payload: { searchPollsResult },
    }
}

export const searchPollsError = (error) => {
    return {
        type: SEARCH_POLLS_ERROR,
        payload: { error },
    }
}
