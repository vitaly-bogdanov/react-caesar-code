import React from 'react';
import AuthorizationForm from './AuthorizationForm';
import axiosCSRF from '../../config/axiosCSRF';
import { connect } from 'react-redux';
import { setLoginStatusCreator } from '../../redux/actions/actionCreators';

const AuthorizationFormContainer = props => {

  const login = async values => {

    try {
      let response = await axiosCSRF.post('/authentication', {
        user: { ...values }
      });
      props.loggedInAction(response.data);
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
  loggedInAction: (data) => dispatch(setLoginStatusCreator(data))
})

export default connect(null, mapDispatchToProps)(AuthorizationFormContainer);