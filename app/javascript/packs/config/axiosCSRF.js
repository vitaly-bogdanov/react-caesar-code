import * as axiosCSRF from 'axios';

axiosCSRF
  .defaults
  .headers
  .common['X-CSRF-TOKEN'] = document.querySelector('[name=csrf-token]').content;

export default axiosCSRF;