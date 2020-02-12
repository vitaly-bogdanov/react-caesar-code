import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = props => (
  <NavLink 
    to={props.to} 
    exact={props.exact} 
    className="navbar-item"
    activeClassName="is-active"
  >
    <strong>{props.name}</strong>
  </NavLink>
)

export default NavbarLink;