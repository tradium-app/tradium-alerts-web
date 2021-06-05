import { takeEvery, fork, put, all } from 'redux-saga/effects'
import gql from 'graphql-tag'
import { SEARCH_POLLS } from './actionTypes'
import { searchPollsSuccess, searchPollsError } from './actions'
import graphqlClient from '../../../graphql-client'

function* searchPolls({ payload: { searchText } }) {
    try {
        const result = yield graphqlClient.query({
            query: gql`
                query searchPolls($searchText: String) {
                    searchPolls(searchText: $searchText) {
                        _id
                        pollUrlId
                        question
                        options {
                            _id
                            text
                            order
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
            variables: {
                searchText,
            },
        })

        yield put(searchPollsSuccess(result.data.searchPolls))
    } catch (error) {
        yield put(searchPollsError(error.message))
    }
}

export function* watchSearchPolls() {
    yield takeEvery(SEARCH_POLLS, searchPolls)
}

function* searchSaga() {
    yield all([fork(watchSearchPolls)])
}

export default searchSaga
