/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  user: null,
  users: null,
  userData: null,
  isLogged: false,
  isFetching: false,
  error: null,
};

export default function (state = initialState, action) {
  function replaceNewData(users) {
    users[users.findIndex( user =>  user.id === action.user.id)] = action.user;
    return [...users];
  }
  function replaceUserData(data) {
    console.log(action.user)
    const user = {...data, ...action.user};
    return {...user};
  }
  switch (action.type) {
    ///SIGN_UP///
    case ACTION.SIGN_UP_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.SIGN_UP_RESPONSE: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.SIGN_UP_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///LOGIN///
    case ACTION.LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.LOGIN_RESPONSE: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///REFRESH///
    case ACTION.REFRESH_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.REFRESH_RESPONSE: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.REFRESH_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///LOGOUT///
    case ACTION.LOGOUT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.LOGOUT_RESPONSE: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isLogged: false,
        error: null,
      };
    }
    case ACTION.LOGOUT_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///GET_USERS///
    case ACTION.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.GET_USERS_RESPONSE: {
      return {
        ...state,
        users: action.users,
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.GET_USERS_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///SWITCH_USER_STATUS///
    case ACTION.SWITCH_USER_STATUS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.SWITCH_USER_STATUS_RESPONSE: {
      return {
        ...state,
        users: replaceNewData(state.users),
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.SWITCH_USER_STATUS_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///GET_USER_DATA///
    case ACTION.GET_USER_DATA_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.GET_USER_DATA_RESPONSE: {
      return {
        ...state,
        userData: action.user,
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.GET_USER_DATA_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
   ///UPDATE_USER_FULL_NAME///
    case ACTION.UPDATE_USER_FULL_NAME_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_FULL_NAME_RESPONSE: {
      return {
        ...state,
        userData: replaceUserData(state.userData),
        user: replaceUserData(state.user),
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_FULL_NAME_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
   ///UPDATE_USER_ABOUT_ME///
    case ACTION.UPDATE_USER_ABOUT_ME_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_ABOUT_ME_RESPONSE: {
      return {
        ...state,
        userData: replaceUserData(state.userData),
        user: replaceUserData(state.user),
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_ABOUT_ME_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///UPLOAD_USER_PHOTO///
    case ACTION.UPLOAD_USER_PHOTO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.UPLOAD_USER_PHOTO_RESPONSE: {
      return {
        ...state,
        user: replaceUserData(state.user),
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.UPLOAD_USER_PHOTO_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    ///UPDATE_USER_PASSWORD///
    case ACTION.UPDATE_USER_PASSWORD_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_PASSWORD_RESPONSE: {
      return {
        ...state,
        user: replaceUserData(state.user),
        isFetching: false,
        isLogged: true,
        error: null,
      };
    }
    case ACTION.UPDATE_USER_PASSWORD_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
}


