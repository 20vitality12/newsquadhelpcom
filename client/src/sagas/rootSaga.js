import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {loginSaga, logoutSaga, refreshSaga, signUpSaga} from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.SIGN_UP_ACTION, signUpSaga);
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REFRESH_ACTION, refreshSaga);
  yield takeLatest(ACTION.LOGOUT_ACTION, logoutSaga);

}

export default rootSaga;
