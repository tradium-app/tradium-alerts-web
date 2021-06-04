import { takeEvery, fork, put, all } from 'redux-saga/effects'
import { FETCH_TOP_TAGS, FETCH_TOP_TRENDING_POLLS } from './actionTypes'
import { fetchTopPollsSuccess, fetchTopPollsError, fetchTopTagsSuccess, fetchTopTagsError } from './actions'
import graphqlClient from '../../graphql-client'
import gql from 'graphql-tag'

function* fetchTopPolls() {
    try {
        const result = yield graphqlClient.query({
            query: gql`
                query getTopPolls {
                    getTopPolls {
                        _id
                        pollUrlId
                        question
                        options {
                            _id
                            text
                            order
                            selected
                            totalVotes
                        }
                        author {
                            _id
                            userUrlId
                            name
                            imageUrl
                            status
                        }
                        tags
                        createdDate
                        modifiedDate
                    }
                }
            `,
        })

        yield put(fetchTopPollsSuccess(result.data.getTopPolls))
    } catch (error) {
        yield put(fetchTopPollsError(error.message))
    }
}

export function* watchFetchTopPolls() {
    yield takeEvery(FETCH_TOP_TRENDING_POLLS, fetchTopPolls)
}

function* fetchTopTags({ payload: { searchText } }) {
    try {
        const result = yield graphqlClient.query({
            query: gql`
                query getTopTags($searchText: String) {
                    getTopTags(searchText: $searchText) {
                        tagId
                        currentMonthCount
                    }
                }
            `,
            variables: { searchText },
        })

        console.log('printing result.data.getTopTags', result.data.getTopTags)

        yield put(fetchTopTagsSuccess(result.data.getTopTags))
    } catch (error) {
        yield put(fetchTopTagsError(error.message))
    }
}

export function* watchFetchTopTags() {
    yield takeEvery(FETCH_TOP_TAGS, fetchTopTags)
}

function* homeSaga() {
    yield all([fork(watchFetchTopPolls), fork(watchFetchTopTags)])
}

export default homeSaga
