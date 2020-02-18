import React, { useState } from 'react';
import Admin from '../../../layouts/admin/Admin';
import EncryptionFormContainer from '../../../component/encryptionForm/EncryptionFormContainer';

const Encryption = props => (
  <Admin push={props.history.push}>
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Зашифровать</h1>
            <h2 className="subtitle">Введите любое сообщение(только руский алфавит и символы)</h2>
            <p>Сохранится после шифрования в БД</p>
            <EncryptionFormContainer />
          </div>
        </div>
      </section>
    </div>
  </Admin>
)

export default Encryption;