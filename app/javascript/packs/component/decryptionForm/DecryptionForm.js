import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../input/Input';
import { 
  textValidationCreator,
  numberValidation
} from '../../config/validations';
import { getValidateClassHalper } from '../../config/halpers';


const initialValues = {
  cipher: '',
  key: ''
}

const DecryptionForm = props => {
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        props.decryption(values);
        actions.resetForm(initialValues);
      }}
    >
      {
        ({errors, touched}) => (
          <Form>
            <Input
              name="cipher"
              type="text"
              placeholder="Введите шифр"
              validate={textValidationCreator(10, 100)}
              validateClass={getValidateClassHalper(errors.text, touched.text)}
            />
            <Input
              name="key"
              type="text"
              placeholder="Введите ключ"
              validate={numberValidation}
              validateClass={getValidateClassHalper(errors.text, touched.text)}
            />
            <button type="submit" className="button is-success">Success</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default DecryptionForm;