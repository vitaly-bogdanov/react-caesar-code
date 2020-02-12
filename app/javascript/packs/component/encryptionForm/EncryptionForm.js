import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../input/Input';
import { 
  textValidationCreator,
  numberValidation
} from '../../config/validations';
import { getValidateClassHalper } from '../../config/halpers';


const initialValues = {
  text: '',
  key: ''
}

const EncryptionForm = props => {
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        props.encryption(values);
        actions.resetForm(initialValues);
      }}
    >
      {
        ({errors, touched}) => (
          <Form>
            <Input
              name="text"
              type="text"
              placeholder="Введите сообщение для шифрования"
              validate={textValidationCreator(10, 100)}
              validateClass={getValidateClassHalper(errors.text, touched.text)}
            />
            <Input
              name="key"
              type="text"
              placeholder="Введите ключ"
              validate={numberValidation}
              validateClass={getValidateClassHalper(errors.text, touched.key)}
            />
            <button type="submit" className="button is-success">Success</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default EncryptionForm;