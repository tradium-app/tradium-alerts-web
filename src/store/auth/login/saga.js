import { takeEvery, fork, put, all, call } from 'redux-saga/effects'

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes'
import { loginSuccess, logoutUserSuccess, apiError } from './actions'

//Include Both Helper File with needed methods
import { getFirebaseBackend } from '../../../helpers/firebase_helper'
import { postFakeLogin } from '../../../helpers/fakebackend_helper'

const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
    try {
        const response = yield call(postFakeLogin, '/post-fake-login', user)
        localStorage.setItem('authUser', JSON.stringify(response))
        yield put(loginSuccess(response))
        history.push('/')
    } catch (error) {
        yield put(apiError(error))
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        localStorage.removeItem('authUser')

        if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
            const response = yield call(fireBaseBackend.logout)
            yield put(logoutUserSuccess(response))
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
