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

import { signIn } from '../src/firebase-controller.js';

describe('Autenticación con correo y contraseña', () => {
  it('Debería poder iniciar sesión', () => {
    return signIn('test-register@gmail.com', '1234567')
      .then((user) => {
        expect(user.email).toBe('test-register@gmail.com')
      });
  });
});