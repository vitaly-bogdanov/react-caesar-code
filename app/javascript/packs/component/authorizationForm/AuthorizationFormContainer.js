import React from 'react';
import AuthorizationForm from './AuthorizationForm';
import axiosCSRF from '../../config/axiosCSRF';
import { connect } from 'react-redux';
import { 
  setLoginStatusCreator,
  getAllCiphersCreator
} from '../../redux/actions/actionCreators';
import { loggedInLocalStorageHalper } from '../../config/halpers';

const AuthorizationFormContainer = props => {
  
  const login = async values => {
    let data = {
      email: values.email.trim().toLowerCase(),
      password: values.password.trim()
    };
    try {
      let response = await axiosCSRF.post('/authentication', {
        user: { ...data }
      });
      loggedInLocalStorageHalper(response.data.loggedIn, response.data.user);
      props.setLoginStatusAction({loggedIn: response.data.loggedIn, user: response.data.user });
      props.getAllCiphersAction(response.data.ciphers);
      return response.status;
    } catch (error) {
      console.error(error);
      return error.response.status;
    }
  }

  return (
    <AuthorizationForm
      login={login}
      push={props.push}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  setLoginStatusAction: (data) => dispatch(setLoginStatusCreator(data)),
  getAllCiphersAction: (data) => dispatch(getAllCiphersCreator(data))
})

export default connect(null, mapDispatchToProps)(AuthorizationFormContainer);