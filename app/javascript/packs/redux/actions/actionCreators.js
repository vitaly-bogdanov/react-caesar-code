import {
  SET_LOGIN_STATUS,
  GET_ALL_CIPHERS,
  DESTROY
} from './actionTypes';

export const setLoginStatusCreator = data => ({
  type: SET_LOGIN_STATUS,
  payload: data
});

export const getAllCiphersCreator = data => ({
  type: GET_ALL_CIPHERS,
  payload: data
});

export const destroyCreator = id => ({
  type: DESTROY,
  payload: { id }
});