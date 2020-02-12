import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonLink = props => (
  <NavLink 
    className={"button " + props.typeButton } 
    to={props.to} 
    exact={props.exact}>
    <strong>{props.name}</strong>
  </NavLink>
)

export default ButtonLink;