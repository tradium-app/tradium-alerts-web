import { FETCH_TOP_TRENDING_POLLS, FETCH_SUCCESS, FETCH_ERROR, FETCH_TOP_TAGS, FETCH_TOP_TAGS_SUCCESS, FETCH_TOP_TAGS_ERROR } from './actionTypes'

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

export const fetchTopTags = (searchText) => {
    return {
        type: FETCH_TOP_TAGS,
        payload: { searchText },
    }
}

export const fetchTopTagsSuccess = (topTags) => {
    return {
        type: FETCH_TOP_TAGS_SUCCESS,
        payload: { topTags },
    }
}

export const fetchTopTagsError = (error) => {
    return {
        type: FETCH_TOP_TAGS_ERROR,
        payload: { error },
    }
}
