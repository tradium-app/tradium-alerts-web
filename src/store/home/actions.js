import { FETCH_TOP_TRENDING_POLLS, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes'

export const fetchTopPolls = () => {
    return {
        type: FETCH_TOP_TRENDING_POLLS,
        payload: {},
    }
}

export const fetchTopPollsSuccess = (topPolls) => {
    return {
        type: FETCH_SUCCESS,
        payload: { topPolls },
    }
}

export const fetchTopPollsError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: { error },
    }
}
