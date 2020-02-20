import axiosCSRF from '../config/axiosCSRF';
import { 
  getAllCiphersCreator,
  setLoginStatusCreator
} from './actions/actionCreators';
import { loggedInLocalStorageHalper } from '../config/halpers';

export const checkLoggedInThunk = () => dispatch => {
  axiosCSRF.get('/authentication').then(response => {
    loggedInLocalStorageHalper(response.data.loggedIn, response.data.user);
    dispatch(setLoginStatusCreator({loggedIn: response.data.loggedIn, user: response.data.user}));
    dispatch(getAllCiphersCreator(response.data.ciphers));
  }).catch(error => {
    console.log(error);
  });
}