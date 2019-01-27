

// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
}
  //Función para validar email correctos
  export const emailValidation = (email) =>{
    if (email.indexOf('@')===-1 || email.indexOf('.')===-1) return false;
    else if (email.indexOf('@') && email.indexOf('.')) return true;
  };