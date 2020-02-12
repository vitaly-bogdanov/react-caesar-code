import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarLink from '../../component/navbarLink/NavbarLink';
import ButtonLink from '../../component/buttonLink/ButtonLink';
import pages from '../../config/pages';

const Client = props => {
  return (
    <Fragment>
      <header>
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start">
                <NavLink to="/" exact={true} className="navbar-item">
                  <strong>Home</strong>
                </NavLink>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    {
                      props.loggedIn ?
                      (
                        <Fragment>
                          <strong>{props.user.email}</strong>
                          <NavbarLink 
                            to={pages.encryption.path} 
                            exact={pages.encryption.exact}
                            name={pages.encryption.name}
                          />
                        </Fragment>
                      ) : (
                        <Fragment>
                          <ButtonLink 
                            to={pages.registration.path} 
                            exact={pages.registration.exact}
                            name={pages.registration.name}
                            typeButton="is-primary"
                          />
                          <ButtonLink 
                            to={pages.authorization.path} 
                            exact={pages.authorization.exact}
                            name={pages.authorization.name}
                            typeButton="is-link"
                          />
                        </Fragment>
                      )
                    }                    
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
  loggedIn: state.authorization.loggedIn,
  user: state.authorization.user
});

export default connect(mapStateToProps)(Client);