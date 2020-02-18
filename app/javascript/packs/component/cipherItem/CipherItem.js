import React from 'react';
import classes from './cipherItem.module.scss';

const CipherItem = props => (
  <p>
    Шифр: "{props.cipher.code}", ключ: {props.cipher.secret_key}
    <span className={classes.destroy} onClick={() => props.destroy(props.cipher.id)}>&times;</span>
  </p>
);

export default CipherItem;