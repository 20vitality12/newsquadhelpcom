import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga,
  logoutSaga,
  refreshSaga,
  signUpSaga,
  getUsersSaga,
  switchUserStatusSaga,
  getUserDataSaga,
  updateUserFullNameSaga,
  updateUserAboutMeSaga,
  uploadUserPhotoSaga,
} from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.SIGN_UP_ACTION, signUpSaga);
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REFRESH_ACTION, refreshSaga);
  yield takeLatest(ACTION.LOGOUT_ACTION, logoutSaga);
  yield takeLatest(ACTION.GET_USERS_ACTION, getUsersSaga);
  yield takeLatest(ACTION.SWITCH_USER_STATUS_ACTION, switchUserStatusSaga);
  yield takeLatest(ACTION.GET_USER_DATA_ACTION, getUserDataSaga);
  yield takeLatest(ACTION.UPDATE_USER_FULL_NAME_ACTION, updateUserFullNameSaga);
  yield takeLatest(ACTION.UPDATE_USER_ABOUT_ME_ACTION, updateUserAboutMeSaga);
  yield takeLatest(ACTION.UPLOAD_USER_PHOTO_ACTION, uploadUserPhotoSaga);
}

export default rootSaga;
