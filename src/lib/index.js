// aqui exportaras las funciones que necesites

// Función para validar email correctos
export const emailValidation = (email) => {
  if (email.indexOf('@')===-1 || email.indexOf('.')===-1) return false;
    else if (email.indexOf('@') && email.indexOf('.')) return true;
};

export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};