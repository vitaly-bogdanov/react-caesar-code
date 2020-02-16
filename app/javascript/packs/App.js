import React, { useEffect } from 'react';
import AppRoutes from './config/AppRoutes';
import { checkLoggedInThunk } from './redux/middlewares';
import { connect } from 'react-redux';
import 'bulma/bulma';
import './app.scss';

const App = props => {

  useEffect(() => {
    props.checkLoggedIn();
  }, []);

  return (
    <AppRoutes />
  )
}

const mapDispatchToProps = dispatch => ({
  checkLoggedIn: () => dispatch(checkLoggedInThunk())
});

export default connect(null, mapDispatchToProps)(App);