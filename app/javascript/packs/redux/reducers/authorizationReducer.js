import { SET_LOGIN_STATUS } from '../actions/actionTypes';

let initialState = {
  loggedIn: localStorage.loggedIn || false,
  user: localStorage.user || {}
}

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return action.payload
    default:
      return state;
  }
}

export default authorizationReducer;