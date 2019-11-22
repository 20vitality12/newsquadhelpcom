import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {loginSaga, logoutSaga, refreshSaga, signUpSaga, getUsersSaga, switchUserStatusSaga} from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.SIGN_UP_ACTION, signUpSaga);
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REFRESH_ACTION, refreshSaga);
  yield takeLatest(ACTION.LOGOUT_ACTION, logoutSaga);
  yield takeLatest(ACTION.GET_USERS_ACTION, getUsersSaga);
  yield takeLatest(ACTION.SWITCH_USER_STATUS_ACTION, switchUserStatusSaga);
}

export default rootSaga;
