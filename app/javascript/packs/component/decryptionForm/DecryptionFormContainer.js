import React from 'react';
import DecryptionForm from './DecryptionForm';
import axiosCSRF from '../../config/axiosCSRF';

const DecryptionFormContainer = () => {

  const decryption = async values => {
    try {
      let response = await axiosCSRF.post('/decryption', {
        cipher: { ...values }
      });

      setText(response.data.text);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <DecryptionForm />
  );
}

export default DecryptionFormContainer;