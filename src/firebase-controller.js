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
      const user = result.user.displayName;
      const email = result.user.email;
      createProfile(email, user);
    })
    .catch(() => { })
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user.displayName;
      const email = result.user.email;
      createProfile(email, user);
    })
    .catch(() => { });
};

export const userData = () => {
  const user = firebase.auth().currentUser;
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
  // .then((result) => {
  //   // alert('Se ha cerrado correctamente');
  // })
    .catch(() => {})
};

// FUNCIÓN de prueba para obtener todos los perfiles que hay en la
// colección user
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
