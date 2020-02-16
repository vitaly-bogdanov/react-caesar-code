import React from 'react';
import Admin from '../../../layouts/admin/Admin';
import DecryptionFormContainer from '../../../component/decryptionForm/DecryptionFormContainer';

const Decryption = props => (
  <Admin push={props.history.push}>
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Расшифровать</h1>
            <h2 className="subtitle">Введите шифр и ключ</h2>
            <DecryptionFormContainer />
          </div>
        </div>
      </section>
    </div>
  </Admin>
)

export default Decryption;