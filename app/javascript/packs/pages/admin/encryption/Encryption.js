import React, { useState } from 'react';
import Admin from '../../../layouts/admin/Admin';
import EncryptionForm from '../../../component/encryptionForm/EncryptionForm';

const Encryption = props => (
  <Admin push={props.history.push}>
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Зашифровать</h1>
            <h2 className="subtitle">Введите любое сообщение(только руский алфавит и символы)</h2>
            <p>Сохранится после шифрования в БД</p>
            <EncryptionForm />
          </div>
        </div>
      </section>
    </div>
  </Admin>
)

export default Encryption;