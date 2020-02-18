import React, { Fragment } from 'react';
import CipherItem from '../cipherItem/CipherItem';

const CiphersList = props => (
  <Fragment>
    <h1 className="title">Все шифры</h1>
    <h2 className="subtitle">Используется "Шифр Цезаря"</h2>
    {
      props.ciphers.map((cipher, index) => {
        return <CipherItem key={index} cipher={cipher} destroy={props.destroy} />
      })
    }
  </Fragment>
);

export default CiphersList;