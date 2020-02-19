import React, { Fragment, useState } from 'react';
import EncryptionForm from './EncryptionForm';
import axiosCSRF from '../../config/axiosCSRF';
import { connect } from 'react-redux';
import { addCipherCreator } from '../../redux/actions/actionCreators';

const EncryptionFormContainer = props => {
  let [cipher, setCipher] = useState('');
  
  const encryption = async values => {
    let data = {
      text: values.text.trim().toLowerCase(),
      key: values.key.trim()
    };

    try {
      let response = await axiosCSRF.post('/encryption', {
        cipher: { ...data }
      });

      props.addCipherAction(response.data);
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

const mapDispatchToProps = dispatch => ({
  addCipherAction: (data) => dispatch(addCipherCreator(data))
});

export default connect(null, mapDispatchToProps)(EncryptionFormContainer);