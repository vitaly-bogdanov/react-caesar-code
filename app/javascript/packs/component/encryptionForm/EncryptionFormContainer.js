import React, { Fragment, useState } from 'react';
import EncryptionForm from './EncryptionForm';

const EncryptionFormContainer = props => {
  let [cipher, setCipher] = useState('');
  
  const encryption = async values => {
    values.text = values.text.trim();
    values.key = values.key.trim();
    try {
      let response = await axiosCSRF.post('/encryption', {
        cipher: { ...values }
      });

      setCipher(response.data.code);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <EncryptionForm encryption={encryption} />
      <hr />
      <div>
        <p>Шифр: <strong>{cipher}</strong></p>
      </div>
    </Fragment>
  );
}

export default EncryptionFormContainer;