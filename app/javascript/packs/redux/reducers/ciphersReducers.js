import { GET_ALL_CIPHERS } from '../actions/actionTypes';

const initialState = {
  ciphers: []
}

const ciphersRducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CIPHERS:
      return { ciphers: action.payload };
    default:
      return state;
  }
}

export default ciphersRducers;