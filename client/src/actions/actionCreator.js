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

export const getUserData = () => ({
  type: ACTION.GET_USER_DATA_ACTION,
});

export const updateFullName = data => ({
  type: ACTION.UPDATE_USER_FULL_NAME_ACTION,
  data
});

export const updateAboutMe = data => ({
  type: ACTION.UPDATE_USER_ABOUT_ME_ACTION,
  data
});

export const uploadUserPhoto = data => ({
  type: ACTION.UPLOAD_USER_PHOTO_ACTION,
  data
});