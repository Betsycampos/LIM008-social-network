const changeHash = (hash) =>  {
  location.hash = hash;
}

export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => changeHash('#/wall'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

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
}

export const signOut = () => {
  firebase.auth().signOut().then(() => {
    alert('Se ha cerrado correctamente');
  })
  .catch(err => console.log('Error logout', err))
}
