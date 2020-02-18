import React, { Fragment, useState } from 'react';
import DecryptionForm from './DecryptionForm';
import axiosCSRF from '../../config/axiosCSRF';

const DecryptionFormContainer = props => {
  let [text, setText] = useState('');
  const decryption = async values => {
    let data = {
      text: values.cipher.trim().toLowerCase(),
      key: values.key.trim()
    };

    try {
      let response = await axiosCSRF.post('/decryption', {
        cipher: { ...data }
      });
      setText(response.data.text);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Fragment>
      <DecryptionForm decryption={decryption} />
      <hr />
      <div>
        <p>Текст: <strong>{text}</strong></p>
      </div>
    </Fragment>
  );
}

export default DecryptionFormContainer;