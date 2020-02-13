import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import classes from './registrationForm.module.scss';
import Input from '../input/Input';
import { getValidateClassHalper } from '../../config/halpers';
import { 
  validateEmail,
  validatePassword, 
  confirmValidatePasswordCreator 
} from '../../config/validations';
import Alert from '../alert/Alert';
import pages from '../../config/pages';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

const RegistrationForm = props => {
  
  let [serverErrors, setServerError] = useState([]);
  let [alertVisible, setAlertVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        let result = await props.registrationNewUser(values);
        if (result.status == 201) {
          actions.resetForm(initialValues);
          props.push(pages.allCipher.path);
        } else if (result.status == 403) {
          setServerError(result.errors);
          setAlertVisible(true);
        }
      }}
    >
      {
        ({errors, touched, values}) => (
          <Form className={classes.form}>
            
            { alertVisible && <Alert messages={serverErrors} type="is-danger" setAlertVisible={setAlertVisible} /> }

            <Input
              name="email"
              type="text"
              placeholder="Введите Email"
              validate={validateEmail}
              validateClass={getValidateClassHalper(errors.email, touched.email)}
            />
            <Input 
              name="password"
              type="password"
              placeholder="Введите пароль"
              validate={validatePassword}
              validateClass={getValidateClassHalper(errors.password, touched.password)}
            />
            <Input 
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
              validate={confirmValidatePasswordCreator(values.password, touched.password)}
              validateClass={getValidateClassHalper(errors.confirmPassword, touched.confirmPassword)}
            />
            <button type="submit" className="button is-success">Success</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default RegistrationForm;