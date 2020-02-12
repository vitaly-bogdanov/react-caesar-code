import axiosCSRF from '../config/axiosCSRF';
import { getAllCiphersCreator } from './actions/actionCreators';


export const getAllCiphersThunk = () => dispatch => {
  axiosCSRF.get('/ciphers').then(response => {
    dispatch(getAllCiphersCreator(response.data));
  }).catch(error => {
    console.error(error);
  });
}