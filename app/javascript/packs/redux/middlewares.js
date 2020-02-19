import axiosCSRF from '../config/axiosCSRF';
import { 
  getAllCiphersCreator,
  setLoginStatusCreator
} from './actions/actionCreators';

export const checkLoggedInThunk = () => dispatch => {
  axiosCSRF.get('/authentication').then(response => {
    localStorage.loggedIn = response.data.loggedIn;
    localStorage.user = response.data.user;
    dispatch(setLoginStatusCreator({loggedIn: response.data.loggedIn, user: response.data.user}));
    dispatch(getAllCiphersCreator(response.data.ciphers));
  }).catch(error => {
    console.log(error);
  });
}