export const createUser = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => changeHash('#/wall'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
export const authenticationGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user.displayName;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(error);
    });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult()
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(error);
    });
};

export const addPublish = (textNewPublish, security) =>{
  const email = userData();
  firebase.firestore().collection(security).add({
    email: email,
    post: textNewPublish,
    countLikes: 0
  })
  .then((docRef) =>{
    alert('Su post se agrego con éxito ', docRef.id);
  } )
  .catch((error) =>{
    alert('Su post no puede ser publicado, Este es un gran error: ', error);
  } )
};

export const getPublish = (callback) =>
  firebase.firestore().collection('friends')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log('esto es email: '+doc.data().email);
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 

// export const getPosts = (callback, nameCollection) =>
//   firebase.firestore().collection(nameCollection)
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() })
//       });
//       callback(data);
//     });

export const deletePost = (nameCollection, idPost) => 
  firebase.firestore().collection(nameCollection).doc(idPost).delete()  


export const signOut = () => {
  firebase.auth().signOut().then(() => {
    alert('Se ha cerrado correctamente');
  })
  .catch(err => console.log('Error logout', err))
};

const userData = () => {
  const user = firebase.auth().currentUser;
  if (user != null) return user.email;
  else alert('para colgar un post debe iniciar sesión');
};




