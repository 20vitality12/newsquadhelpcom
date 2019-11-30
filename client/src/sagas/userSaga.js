import { put, call } from 'redux-saga/effects';
import _ from 'lodash';
import ACTION from '../actions/actiontsTypes';
import history from '../utils/browserHistory';
import { DASHBOARD } from '../constants/links'
import {
  signUp,
  login,
  getUserByAccessToken,
  getUsers,
  switchUserStatus,
  getUserData,
  updateFullName,
  updateAboutMe,
  uploadUserPhoto
} from '../api/rest/restContoller';
import { setTokens } from '../utils/setTokens';
import { ACCESS_TOKEN } from '../constants/constants';

export function* signUpSaga({candidate}) {
  yield put({ type: ACTION.SIGN_UP_REQUEST });
  try {
    const { data } = yield signUp({candidate});
    setTokens(data.tokens);
    yield call(history.push, DASHBOARD);
    yield put({ type: ACTION.SIGN_UP_RESPONSE, user: data.user });
  } catch (e) {
    yield put({ type: ACTION.SIGN_UP_ERROR, error: e });
  }
}

export function* loginSaga({candidate}) {
  yield put({ type: ACTION.LOGIN_REQUEST });
  try {
    const { data } = yield login({candidate});
    setTokens(data.tokens);
    yield call(history.push, DASHBOARD);
    yield put({ type: ACTION.LOGIN_RESPONSE, user: data.user });
  } catch (e) {
    yield put({ type: ACTION.LOGIN_ERROR, error: e });
  }
}
export function* logoutSaga() {
  yield put({ type: ACTION.LOGOUT_REQUEST });
  try {
    yield put({ type: ACTION.LOGOUT_RESPONSE});
    localStorage.clear();
    yield call(history.push, '/');
  } catch (e) {
    yield put({ type: ACTION.LOGOUT_ERROR, error: e });
  }
}

export function* refreshSaga() {
  yield put({ type: ACTION.REFRESH_REQUEST });
  try {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if( token ) {
      const { data } = yield getUserByAccessToken(token);
      yield put({ type: ACTION.REFRESH_RESPONSE, user: data.user});
    }
  } catch (e) {
    yield put({ type: ACTION.REFRESH_ERROR, error: e });
  }
}

export function* getUsersSaga() {
  yield put({ type: ACTION.GET_USERS_REQUEST });
  try {
      const { data } = yield getUsers();
      yield put({ type: ACTION.GET_USERS_RESPONSE, users: data.users});
  } catch (e) {
    yield put({ type: ACTION.GET_USERS_ERROR, error: e });
  }
}

export function* switchUserStatusSaga({user}) {
  yield put({ type: ACTION.SWITCH_USER_STATUS_REQUEST });
  try {
    const { data } = yield switchUserStatus(user);
    yield put({ type: ACTION.SWITCH_USER_STATUS_RESPONSE, user: data.user});
  } catch (e) {
    yield put({ type: ACTION.SWITCH_USER_STATUS_ERROR, error: e });
  }
}

export function* getUserDataSaga() {
  yield put({ type: ACTION.GET_USER_DATA_REQUEST });
  try {
    const { data } = yield getUserData();
    yield put({ type: ACTION.GET_USER_DATA_RESPONSE, user: data.user});
  } catch (e) {
    yield put({ type: ACTION.GET_USER_DATA_ERROR, error: e });
  }
}

export function* updateUserFullNameSaga({data}) {
  yield put({ type: ACTION.UPDATE_USER_FULL_NAME_REQUEST });
  try {

    const { data: response } = yield updateFullName(data);

    yield put({ type: ACTION.UPDATE_USER_FULL_NAME_RESPONSE, user: response.updatedData});
  } catch (e) {
    yield put({ type: ACTION.UPDATE_USER_FULL_NAME_ERROR, error: e });
  }
}

export function* updateUserAboutMeSaga({data}) {
  yield put({ type: ACTION.UPDATE_USER_ABOUT_ME_REQUEST });
  try {

    const { data: response } = yield updateAboutMe(data);
    yield put({ type: ACTION.UPDATE_USER_ABOUT_ME_RESPONSE, user: response.updatedData});
  } catch (e) {
    yield put({ type: ACTION.UPDATE_USER_ABOUT_ME_ERROR, error: e });
  }
}

export function* uploadUserPhotoSaga({data}) {
  yield put({ type: ACTION.UPLOAD_USER_PHOTO_REQUEST });
  try {
    const {data: response} = data;
    //const filename = response.filename;
    yield put({ type: ACTION.UPLOAD_USER_PHOTO_RESPONSE, user: response});
  } catch (e) {
    yield put({ type: ACTION.UPLOAD_USER_PHOTO_ERROR, error: e });
  }
}