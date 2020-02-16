import axiosCSRF from '../config/axiosCSRF';
import { 
  getAllCiphersCreator,
  setLoginStatusCreator
} from './actions/actionCreators';

export const getAllCiphersThunk = () => dispatch => {
  axiosCSRF.get('/ciphers').then(response => {
    dispatch(getAllCiphersCreator(response.data));
  }).catch(error => {
    console.log(error);
  });
}

export const checkLoggedInThunk = () => dispatch => {
  axiosCSRF.get('/authentication').then(response => {
    localStorage.loggedIn = response.data.loggedIn;
    localStorage.user = response.data.user;
    dispatch(setLoginStatusCreator(response.data));
  }).catch(error => {
    console.log(error);
  });
}