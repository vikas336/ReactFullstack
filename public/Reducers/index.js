import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ContactReducer from './ContactReducer';
export default combineReducers({
  routing: routerReducer,
  ContactReducer: ContactReducer
})