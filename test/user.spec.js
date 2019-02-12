import MockFirebase from 'mock-cloud-firestore';

const data = {
  __collection__: {
    user: {
      __doc__: {
        u001: {
          email: 'claudiamalasquez67@gmail.com',
          name: 'Claudia Malásquez Aquino'
        },
        u002: {
          email: 'alegna0709@gmail.com',
          name: 'Alegna Emilia'
        }
      }
    }
  }
}

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true});

import { createProfile, getProfile, confirmUniqueProfile } from '../src/firebase-controller.js';

describe('User', () => {
  it('Debería crear un usuario', (done) => {
    return createProfile('betsy@hotmail.com', 'Betsy Campos')
      .then(() => getProfile(
        (data) => {
          const result = data.find((user) => user.email === 'betsy@hotmail.com');
          expect(result.email).toBe('betsy@hotmail.com');
          done()
        }
      ))
  });
  it('Debería confirmar que no se duplique un usuario', () => {
    return confirmUniqueProfile('claudiamalasquez67@gmail.com','Claudia Malásquez Aquino')
    .then((result) => {
      expect(result).toBe(undefined)
    })
  });
});