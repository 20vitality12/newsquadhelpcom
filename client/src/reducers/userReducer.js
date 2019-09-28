/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  user: null,
  users: null,
  isLogged: false,
  isFetching: false,
  error: null,
};

export default function (state = initialState, action) {
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
        isLogged: true,
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
    default: {
      return state;
    }
  }
}


