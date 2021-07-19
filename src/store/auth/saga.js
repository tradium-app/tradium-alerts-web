import { takeEvery, fork, put, all } from 'redux-saga/effects'
import firebase from 'firebase/app'
import gql from 'graphql-tag'
import LogRocket from 'logrocket'
import { LOGIN_USER, LOGOUT_USER } from './actionTypes'
import { loginSuccess, logoutUserSuccess, apiError } from './actions'
import graphqlClient from '../../graphql-client'

function* loginUser({ payload: { accessToken, history } }) {
    try {
        const result = yield graphqlClient.mutate({
            mutation: gql`
                mutation LOGIN_USER($accessToken: String!) {
                    loginUser(accessToken: $accessToken) {
                        success
                        message
                        user {
                            id
                            name
                            imageUrl
                        }
                    }
                }
            `,
            variables: {
                accessToken: accessToken,
            },
        })

        if (result.data.loginUser.success) {
            const authUser = result.data.loginUser.user
            if (authUser) {
                authUser.accessToken = result.data.loginUser.accessToken
                localStorage.setItem('accessToken', result.data.loginUser.accessToken)
                yield put(loginSuccess(authUser))
            }

            LogRocket.identify(authUser.userUrlId, {
                name: authUser.name,
            })
        }

        history.push('/')
    } catch (error) {
        yield put(apiError(error))
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        yield firebase.auth().signOut()
        localStorage.removeItem('accessToken')
        yield put(logoutUserSuccess())

        history.push('/')
    } catch (error) {
        yield put(apiError(error))
    }
}

export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* authSaga() {
    yield all([fork(watchUserLogin), fork(watchUserLogout)])
}

export default authSaga
