import ACTION from './actiontsTypes';

export const signUp = candidate => ({
  type: ACTION.SIGN_UP_ACTION,
  candidate
});

export const login = candidate => ({
  type: ACTION.LOGIN_ACTION,
  candidate
});

export const logout = () => ({
  type: ACTION.LOGOUT_ACTION
});

export const refresh = () => ({
  type: ACTION.REFRESH_ACTION
});

export const getUsers = () => ({
  type: ACTION.GET_USERS_ACTION
});

export const switchUserStatus = (user) => ({
  type: ACTION.SWITCH_USER_STATUS_ACTION,
  user
});