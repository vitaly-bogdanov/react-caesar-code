import React from 'react';
import Client from '../../../layouts/client/Client';
import RegistrationFormContainer from '../../../component/registrationForm/RegistrationFormContainer';

const Registration = props => {
  
  return (
    <Client>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Регистрация</h1>
              <h2 className="subtitle">Создайте аккаунт, если у вас его еще нет</h2>
              <RegistrationFormContainer push={props.history.push} />
            </div>
          </div>
        </section>
      </div>
    </Client>
  )
}

export default Registration;