import { all } from 'redux-saga/effects'

import AuthSaga from './auth/saga'
import ProfileSaga from './profile/saga'

export default function* rootSaga() {
    yield all([AuthSaga(), ProfileSaga()])
}
