export const createUser = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

export const createProfile = (email, name) =>
  firebase.firestore().collection('user').add({
    email: email,
    name: name
  })
export const editProfile = (email, name) => 
  firebase.firestore().collection('user').doc(email).update({
    name:  name
  });

export const confirmUniqueProfile = (emailInput, name) =>
  firebase.firestore().collection('user').where('email', '==', emailInput).get()
    .then ((querySnapshot) =>{
      querySnapshot.forEach((doc) => {
        const emailDB = doc.data().email;
        if (emailDB !== emailInput) return createProfile(emailInput, name);
      })

    })
    .catch((error) =>{console.log(error)});

export const authenticationGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const userData = () => {
  const user = firebase.auth().currentUser
  if (user != null) return user.email;
  // else alert('para colgar un post debe iniciar sesión');
  else return undefined;
};

export const addPublish = (email, textNewPublish, security) => 
  firebase.firestore().collection('posts').add({
    email: email,
    post: textNewPublish,
    countLikes: 0,
    security: security
  })

export const getPublish = (callback) =>
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
  }); 


export const editPublish = (idPost, textEditPost) => 
  firebase.firestore().collection('posts').doc(idPost).update({
    post:  textEditPost
  });
  
export const deletePublish = (idPost) => 
  firebase.firestore().collection('posts').doc(idPost).delete()  

export const signOut = () => {
  return firebase.auth().signOut()
    .catch(() => {})
};


// PRUEBA4
export const securityPost = (type, callback) => 
  firebase.firestore().collection('posts')
  .where('security', '==', type)
  .then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data()});
      return data;
    })
    callback(data)
  })



  

 
    // .orderBy('date', 'desc')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data()});
//       });
    
//     });
//     console.log(securityPost);
// //PRUEBA3
// export const securityPost = (type) => {
//   firebase.firestore()
//     .collection('posts')
//     .where('security', '==', type)
//     // .orderBy('', '')
//     .onSnapshot(querySnapshot => {
//       const ul = document.querySelector('#idPost');
//       ul.innerHTML = '';
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       data.forEach((security) => {
//         ul.appendChild((security)); 
//       });
//     });
// };
// console.log(securityPost);
//PRUEBA 2
// export const securityPost = (type) => {
//   firebase.firestore()
//     .collection('posts')
//     .where('security', '==', type)
//     // .orderBy('', '')
//     .onSnapshot(querySnapshot => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       type(data);
//     });
// };
// console.log(securityPost);
//VISTA DE PUBLICACIONES AL PÚBLICO
// export const securityPost = (type) => {
//   firebase.firestore()
//     .collection("posts")
//     .where("all-public", "==", type)
//     .get()
//     .onSnapshot(querySnapshot => {
//       const ul = document.querySelector()
//     })
//     // .then(function(querySnapshot) {
//         const data = [];
//         querySnapshot.forEach(doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             data.push({ id: doc.id, ...doc.data() });
//         });
//     // })
//     // .catch(function(error) {
//     //     console.log("Error getting documents: ", error);
//     // });
// };
// export const clasicationOfMe = service cloud.firestore() {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write;
//     }
//   }
// }
// service cloud.firestore() {
//   match /databases/{database}/documents {
//     match /<some_path>/ {
//       allow read, write: if <some_condition>;
//     }
//   }
// }
// export const postsOnlyMe = (email, textNewPublish, security) => 
//   firebase.firestore().collection('posts').get({
//     email: email,
//     post: textNewPublish,  
//     countLikes: 0,
//     security: security
//   })
// console.log(postsOnlyMe); 

// export const ostsOnlyMe = (data, filterBy, condition) => {
//   let onlyMe = [];
//   switch (filterBy) {
//   case 'only-me':
//   onlyMe = data.filter(type => type.security[0] === condition || type.tags[1] === condition);
//     break;
//   case 'friends':
//   onlyMe = data.filter();
//     break;
//   }
//   console.log(postsOnlyMe);
//   return onlyMe;
  
// };

 
// Función para traer todos los documentos de la colección user
export const getProfile = (callback) =>
  firebase.firestore().collection('user')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 

export const increaseLikes = (idPost) => {
  const firebaseCollection = firebase.firestore().collection("posts").doc(idPost);
  return firebaseCollection.get()
    .then((result) => {
      if (result.exists) {
        const likes = result.data().countLikes;
        return likes;
      }
    })
    .then((result) => {
      firebaseCollection.update({
        countLikes: result + 1
      })
    })
};
