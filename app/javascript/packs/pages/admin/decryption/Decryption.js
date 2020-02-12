import React, { useState } from 'react';
import Admin from '../../../layouts/admin/Admin';
import DecryptionForm from '../../../component/decryptionForm/DecryptionForm';
import axiosCSRF from '../../../config/axiosCSRF';

const Decryption = props => {
  let [text, setText] = useState('');

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
    <Admin push={props.history.push}>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Расшифровать</h1>
              <h2 className="subtitle">Введите шифр и ключ</h2>
              <DecryptionForm decryption={decryption} />
              <hr />
              <div>
              <p>Текст: <strong>{text}</strong></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  )
}

export default Decryption;