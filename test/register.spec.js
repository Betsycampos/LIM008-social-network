const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { createUser } from '../src/firebase-controller.js'

describe('Registro de usuarios', () => {
  it('Debería poder registrar usuario', () => {
    createUser('test-function@hotmail.com', '12345678')
    mockauth.flush();
    mockauth.getUserByEmail('test-function@hotmail.com')
      .then((user) => {
        console.assert(user, 'Se ha creado')
      })
  });
});