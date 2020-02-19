import { 
  GET_ALL_CIPHERS,
  DESTROY,
  ADD_CIPHER
} from '../actions/actionTypes';

const initialState = {
  ciphers: []
}

const ciphersRducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CIPHERS:
      return { ciphers: action.payload };
    case DESTROY:
      return { 
        ciphers: state.ciphers.filter(cipher => cipher.id != action.payload.id)
      };
    case ADD_CIPHER:
      return {
        ciphers: [...state.ciphers, action.payload.cipher]
      };
    default:
      return state;
  }
}

export default ciphersRducers;