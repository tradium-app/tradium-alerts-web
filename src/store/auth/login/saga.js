import { takeEvery, fork, put, all, call } from 'redux-saga/effects'

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes'
import { loginSuccess, logoutUserSuccess, apiError } from './actions'

import graphqlClient from '../../../graphql-client'
import gql from 'graphql-tag'

function* loginUser({ payload: { accessToken, history } }) {
    try {
        const result = yield graphqlClient.mutate({
            mutation: gql`
                mutation LOGIN_USER($accessToken: String!) {
                    loginUser(accessToken: $accessToken) {
                        success
                        message
                    }
                }
            `,
            variables: {
                accessToken: accessToken,
            },
        })

        const authUser = result.data.loginUser
        // const response = yield call(postFakeLogin, '/post-fake-login', user)
        localStorage.setItem('authUser', JSON.stringify(authUser))
        // return result.data.loginUser
        yield put(loginSuccess(authUser))
        history.push('/')
    } catch (error) {
        yield put(apiError(error))
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        localStorage.removeItem('authUser')

        if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
            // const response = yield call(fireBaseBackend.logout)
            // yield put(logoutUserSuccess(response))
        }
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
