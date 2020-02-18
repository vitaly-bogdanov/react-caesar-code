import Home from '../pages/client/home/Home';
import Authorization from '../pages/client/authorization/Authorization';
import Registration from '../pages/client/registration/Registration';
import Decryption from '../pages/admin/decryption/Decryption';
import Encryption from '../pages/admin/encryption/Encryption';
import AllCipher from '../pages/admin/allCiphers/AllCiphers';

const pages = {
  home: {
    name: 'На главную',
    path: '/',
    exact: true,
    guard: false,
    component: Home
  },
  authorization: {
    name: 'Авторизация',
    path: '/authorization',
    exact: false,
    guard: false,
    component: Authorization
  },
  registration: {
    name: 'Регистрация',
    path: '/registration',
    exact: false,
    guard: false,
    component: Registration
  },
  encryption: {
    name: 'Зашифровать',
    path: '/encryption',
    exact: false,
    guard: true,
    component: Encryption
  },
  decryption: {
    name: 'Расшифровать',
    path: '/decryption',
    exact: false,
    guard: true,
    component: Decryption
  },
  allCipher: {
    name: 'Все шифры',
    path: '/all-cipher',
    exact: false,
    guard: true,
    component: AllCipher
  }
}

export default pages;