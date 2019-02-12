const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { signIn, userData, authenticationGoogle, authenticationFacebook, signOut } from '../src/firebase-controller.js';

describe('Inicio de sesión', () => {
  it('Debería poder iniciar sesión con email y contraseña', () => {
    return signIn('test-register@gmail.com', '1234567')
      .then((user) => {
        expect(userData()).toBe('test-register@gmail.com')
      });
  });
});

describe('Autenticación con Google', () => {
  it('Debería ser una función', () => {
    expect(typeof authenticationGoogle()).toBe('object');
      // .then((result) => {
      //   // const emailU = result.user.email;
      //   // expect(userData()).toBe(emailU)
      //   // console.log(result);
      // });
  });
});

describe('Autenticación con Facebook', () => {
  it('Debería ser una función', () => {
    expect(typeof authenticationFacebook()).toBe('object');
      // .then((result) => {
      //   // const emailU = result.user.email;
      //   // expect(userData()).toBe(emailU)
      //   // console.log(result);
      // });
  });
});


describe('Cerrar sesión', () => {
  it('Debería cerrar sesión devolviendo undefined', () => {
    return signOut()
    .then(() => {
      expect(userData()).toBe(undefined)
    })
  })
});