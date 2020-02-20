export const getValidateClassHalper = (errors, touched) => {
  if (touched) {
    return errors ? 'is-danger' : 'is-success';
  } else {
    return 'is-info';
  }
}

export const loggedInLocalStorageHalper = (loggedIn, user) => {
  localStorage.loggedIn = loggedIn;
  localStorage.user = user;
}