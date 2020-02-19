import React, { useEffect, Fragment } from 'react';
import pages from '../../config/pages';
import NavbarLink from '../../component/navbarLink/NavbarLink';
import axiosCSRF from '../../config/axiosCSRF';
import { connect } from 'react-redux';
import { setLoginStatusCreator } from '../../redux/actions/actionCreators'
import { getAllCiphersThunk } from '../../redux/middlewares';


const Admin = props => {

  const logout = () => {
    axiosCSRF.delete('/authentication').then(response => {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      props.logoutAction(response.data);
      props.push(pages.home.path);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <Fragment>
      <header>
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start">
                <NavbarLink 
                  to={pages.allCipher.path}
                  exact={pages.allCipher.exact}
                  name={pages.allCipher.name}
                />
                <NavbarLink 
                  to={pages.encryption.path} 
                  exact={pages.encryption.exact}
                  name={pages.encryption.name}
                />
                <NavbarLink 
                  to={pages.decryption.path} 
                  exact={pages.decryption.exact}
                  name={pages.decryption.name}
                />
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <strong>{props.user.email}</strong>
                  <div className="buttons">
                    <button onClick={() => logout()} className="button is-warning">Выйти</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        { props.children }
      </main>
      <footer>
      </footer>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.authorization.user
})

const mapDispatchToProps = dispatch => ({
  logoutAction: (data) => dispatch(setLoginStatusCreator(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);