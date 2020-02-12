export const getValidateClassHalper = (errors, touched) => {
  if (touched) {
    return errors ? 'is-danger' : 'is-success';
  } else {
    return 'is-info';
  }
}