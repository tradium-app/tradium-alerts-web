import { all } from 'redux-saga/effects'

import AuthSaga from './auth/saga'
import ProfileSaga from './profile/saga'
import HomeSaga from './home/saga'
import SearchSaga from '../pages/Search/store/saga'

export default function* rootSaga() {
    yield all([AuthSaga(), ProfileSaga(), HomeSaga(), SearchSaga()])
}
