import { takeEvery, fork, put, all } from 'redux-saga/effects'
import { FETCH_TOP_TRENDING_POLLS } from './actionTypes'
import { fetchTopPollsSuccess, fetchTopPollsError } from './actions'
import graphqlClient from '../../graphql-client'
import gql from 'graphql-tag'

function* fetchTopPolls() {
    try {
        const result = yield graphqlClient.query({
            query: gql`
                query getTopPolls {
                    getTopPolls {
                        _id
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
                            userId
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

export function* watchUserLogin() {
    yield takeEvery(FETCH_TOP_TRENDING_POLLS, fetchTopPolls)
}

function* homeSaga() {
    yield all([fork(watchUserLogin)])
}

export default homeSaga
