//Función para validar email correctos
  export const emailValidation = (email) =>{
    if (email.indexOf('@')===-1 || email.indexOf('.')===-1) return false;
    else return true;
  };

  export const passwordValidation = (password) =>{
    if (password.length >=6) return true;
    else return false;
  };

  //indexOf