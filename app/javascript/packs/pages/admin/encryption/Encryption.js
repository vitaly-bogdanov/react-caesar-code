import React, { useState } from 'react';
import Admin from '../../../layouts/admin/Admin';
import EncryptionForm from '../../../component/encryptionForm/EncryptionForm';
import axiosCSRF from '../../../config/axiosCSRF';

const Encryption = props => {
  let [cipher, setCipher] = useState('');

  const encryption = async values => {
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
    <Admin push={props.history.push}>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Зашифровать</h1>
              <h2 className="subtitle">Введите любое сообщение(только руский алфавит и символы)</h2>
              <p>Сохранится после шифрования в БД</p>
              <EncryptionForm encryption={encryption}/>
              <hr />
              <div>
                <p>Шифр: <strong>{cipher}</strong></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  )
}

export default Encryption;