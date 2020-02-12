import { combineReducers } from 'redux';

import authorizationReducer from './authorizationReducer';
import ciphersRducers from './ciphersReducers';

export default combineReducers({
  authorization: authorizationReducer,
  ciphers: ciphersRducers
});