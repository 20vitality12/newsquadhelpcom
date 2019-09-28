import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import history from '../utils/browserHistory';
import { DASHBOARD } from '../constants/links'
import { signUp, login, getUserByAccessToken } from '../api/rest/restContoller';
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