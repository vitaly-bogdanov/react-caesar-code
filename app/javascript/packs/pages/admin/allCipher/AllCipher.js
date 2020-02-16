import React from 'react';
import Admin from '../../../layouts/admin/Admin';
import { connect } from 'react-redux';


const AllCipher = props => (
  <Admin push={props.history.push}>
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Все шифры</h1>
            <h2 className="subtitle">Используется "Шифр Цезаря"</h2>
            {
              props.ciphers.map((cipher, index) => {
                return <p key={index}>Шифр: "{cipher.code}", ключ: {cipher.secret_key}</p>
              })
            }
          </div>
        </div>
      </section>
    </div>
  </Admin>
)

const mapStateToProps = state => ({
  ciphers: state.ciphers.ciphers
})

export default connect(mapStateToProps)(AllCipher);