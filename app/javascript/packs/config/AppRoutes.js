import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PageNotFound from '../pages/PageNotFound';
import pages from './pages';
import axiosCSRF from '../config/axiosCSRF';
import { setLoginStatusCreator } from '../redux/actions/actionCreators';


const AppRoutes = props => {

  const checkLoggedIn = () => {
    axiosCSRF.get('/authentication').then(response => {
      localStorage.loggedIn = response.data.loggedIn;
      localStorage.user = response.data.user;
      props.loggedInAction(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);
  
  return (
    <Switch>
      {
        Object.keys(pages).map((index, key) => {
          let page = pages[index];
          return page.guard && !props.loggedIn ?
            null
            :
            (
              <Route 
                key={key} 
                path={page.path} 
                exact={page.exact} 
                component={page.component}
              />
            )
        })
      }
      <Route path="/page-not-found" exact={false} component={PageNotFound}/>
      <Redirect to="/page-not-found"/>
    </Switch>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.authorization.loggedIn
});

const mapDispatchToProps = dispatch => ({
  loggedInAction: (data) => dispatch(setLoginStatusCreator(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);