export const createUser = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

export const createProfile = (email, name) =>
  firebase.firestore().collection('user').add({
      email: email,
      name: name
  })

export const authenticationGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const user = result.user.displayName;
      console.log(user);
      const email = result.user.email;
      console.log(email);
      createProfile(email, user);
      console('Se registró con Google');
    })
    .catch(() => { });
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const user = result.user.displayName;
      console.log(user);
      const email = result.user.email;
      console.log(email);
      createProfile(email, user);
      console('Se registró con Facebook');
    })
    .catch(() => { });
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

export const userData = () => {
  const user = firebase.auth().currentUser;
  if (user != null) return user.email;
  else alert('para colgar un post debe iniciar sesión');
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
  firebase.firestore().collection("posts").doc(idPost).update({
    post:  textEditPost
  });
  
export const deletePublish = (idPost) => 
  firebase.firestore().collection('posts').doc(idPost).delete()  

export const signOut = () => {
  firebase.auth().signOut().then(() => {
    alert('Se ha cerrado correctamente');
  })
    .catch(err => console.log('Error logout', err))
};

export const seeLikes = (idPost) => {
  return firebase.firestore().collection("posts").doc(idPost).get()
    .then((result) => {
      if (result.exists) {
        const likes = result.data().countLikes;
        return likes;
      } else {
        console.log('No existe documento')
      }
    })
};

// Función para que los likes aumenten 
export const increaseLikes = (idPost) => {

};
