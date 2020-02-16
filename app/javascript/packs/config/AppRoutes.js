import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PageNotFound from '../pages/PageNotFound';
import pages from './pages';

const AppRoutes = props => {

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

export default connect(mapStateToProps)(AppRoutes);