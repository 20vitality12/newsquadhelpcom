import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';

const appReducer = combineReducers({
  userReducer,
  form: formReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
