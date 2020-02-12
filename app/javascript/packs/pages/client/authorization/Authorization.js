import React from 'react';
import Client from '../../../layouts/client/Client';
import AuthorizationFormContainer from '../../../component/authorizationForm/AuthorizationFormContainer';


const Authorization = props => {
  
  return (
    <Client>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Авторизация</h1>
              <h2 className="subtitle">Войдете, если уже зарегистрированны</h2>
              <AuthorizationFormContainer push={props.history.push} />
            </div>
          </div>
        </section>
      </div>
    </Client>
  )
}

export default Authorization;