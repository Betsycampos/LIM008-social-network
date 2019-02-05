import MockFirebase from 'mock-cloud-firestore';

const data = {
    __collection__: {
      onlyme: {
        __doc__: {
          p001: {
            email: 'claudiamalasquez67@gmail.com',
            post: 'A veces parece que a nadie le importa el planeta.',
            countLikes: 0
          },
        }
      },
      friends: {
        __doc__: {
          p002: {
            email: 'alegna07@gmail.com',
            post: 'Amigos, haré una fiesta de disfraces hechos por materiales reciclables, todos pueden venir con algún disfraz o con algún material que podamos reciclar, el jueves a las 8pm, los espero!',
            countLikes: 0
          },    
        }
      }
    }
  }

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true });  

import { deletePost, getPosts } from '../src/firebase-controller.js';

describe('Muro de posts', () => {
  it('Debería poder eliminar un post', (done) => {
    return deletePost('onlyme', 'p001')
      .then(() => getPosts(
        (data) => {
          const result = data.find((post) => post.id === 'p001');
          expect(result).toBe(undefined);
          done();
        }
      , 'onlyme'))
  });
});