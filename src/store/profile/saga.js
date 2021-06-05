import { takeEvery, fork, put, all } from 'redux-saga/effects'
import gql from 'graphql-tag'
import graphqlClient from '../../graphql-client'

// Login Redux States
import { FETCH_PROFILE } from './actionTypes'
import { profileSuccess, profileError } from './actions'

function* fetchProfile({ payload: { userUrlId } }) {
    try {
        console.log('printing userUrlId', userUrlId)
        const result = yield graphqlClient.query({
            variables: {
                userUrlId: userUrlId,
            },
            query: gql`
                query getUserProfile($userUrlId: String) {
                    getUserProfile(userUrlId: $userUrlId) {
                        _id
                        name
                        imageUrl
                        title
                        shortBio
                        githubLink
                        linkedinLink
                        stackOverflowLink
                        pollsCreated {
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
                                name
                                imageUrl
                                status
                            }
                            tags
                            createdDate
                            modifiedDate
                            status
                        }
                    }
                }
            `,
        })

        yield put(profileSuccess(result.data.getUserProfile))
    } catch (error) {
        yield put(profileError(error.message))
    }
}

export function* watchProfile() {
    yield takeEvery(FETCH_PROFILE, fetchProfile)
}

function* ProfileSaga() {
    yield all([fork(watchProfile)])
}

export default ProfileSaga
