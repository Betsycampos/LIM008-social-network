// aqui exportaras las funciones que necesites

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
//Función para validar email correctos
  export const emailValidation = (email) =>{
    if (email.indexOf('@')===-1 || email.indexOf('.')===-1) return false;
    else return true;
  };

  export const passwordValidation = (password) =>{
    if (password.length >=6) return true;
    else return false;
  };