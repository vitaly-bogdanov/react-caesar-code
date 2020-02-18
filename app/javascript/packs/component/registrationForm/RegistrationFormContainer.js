import React from 'react';
import RegistrationForm from './RegistrationForm';
import axiosCSRF from '../../config/axiosCSRF';
import { connect } from 'react-redux';
import { setLoginStatusCreator } from '../../redux/actions/actionCreators';


const RegistrationFormContainer = props => {

  const registrationNewUser = async values => {
    let data = {
      email: values.email.trim().toLowerCase(),
      password: values.password.trim(),
      confirmPassword: values.confirmPassword.trim()
    };

    try {
      let response = await axiosCSRF.post('/user', { 
        user: { ...data }
      });
      props.loggedInAction(response.data);
      return { errors: [], status: response.status };
    } catch (error) {
      console.error(error);
      return { 
        errors: error.response.data.error.email, 
        status: error.response.status 
      };
    }
  }
  
  return (
    <RegistrationForm
      registrationNewUser={registrationNewUser}
      push={props.push}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  loggedInAction: (data) => dispatch(setLoginStatusCreator(data))
})

export default connect(null, mapDispatchToProps)(RegistrationFormContainer);