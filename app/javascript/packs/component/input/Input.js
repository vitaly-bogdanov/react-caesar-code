import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './input.module.scss';


const FormikInput = props => {

  let fieldClasses = ['input', props.validateClass, classes.field];

  return (
    <div>
      <Field 
        name={props.name}
        type={props.type}
        validate={props.validate}
        placeholder={props.placeholder}
        className={fieldClasses.join(' ')}
      />
      <span className={classes.errorMessage}>
        <ErrorMessage 
          name={props.name}
        />
      </span>
    </div>
  )
}

export default FormikInput;