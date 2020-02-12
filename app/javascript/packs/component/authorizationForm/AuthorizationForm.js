import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '../input/Input';
import { validateEmail, validatePassword } from '../../config/validations';
import classes from './authorizationForm.module.scss';
import { getValidateClassHalper } from '../../config/halpers';
import pages from '../../config/pages';
import Alert from '../alert/Alert';


const initialValues = {
  email: '',
  password: ''
}

const AuthorizationForm = props => {

  let [serverErrors, setServerError] = useState([]);
  let [alertVisible, setAlertVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        let responseStatus = await props.login(values);
        if (responseStatus == 201) {
          actions.resetForm(initialValues);
          props.push(pages.allCipher.path);
        } else if (responseStatus == 401) {
          setServerError(['Проверьте правильность введенных данных']);
          setAlertVisible(true);
        }
      }}
    >
      {
        ({errors, touched}) => (
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
            <button type="submit" className="button is-success">Success</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default AuthorizationForm;