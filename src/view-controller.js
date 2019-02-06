import { createUser, signIn, addPublish, deletePublish, editPublish } from './firebase-controller.js';
import { emailValidation } from './lib/index.js';

const changeHash = (hash) =>  {
  location.hash = hash;
};

export const registerWithEmailAndPassword = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('conf-password').value;
    const warningEmail = document.getElementById('warning-em');
    const warningPassword = document.getElementById('warning-pw');
    const warningConfirmP = document.getElementById('warning-cf');
    if (email === '' && password === '' && confPassword === ''){
      warningEmail.innerHTML = 'Completa el correo.';
      warningPassword.innerHTML = 'Completa la contraseña.';
      warningConfirmP.innerHTML = 'Confirma la contraseña ingresada.';
    } else if(password !== confPassword){
      warningConfirmP.innerHTML = 'La contraseña ingresada debe coincidir con este campo.';
    } else if (!emailValidation(email)){
      warningEmail.innerHTML = 'El correo debe contener @ y .';
    } else {
      warningEmail.innerHTML = '';
      warningPassword.innerHTML = '';
      warningConfirmP.innerHTML = '';
      createUser(email, password)
      .then(() => changeHash('#/wall'))
      .catch(() => {});
      alert('Usuario registrado');
      document.getElementById('frm-register').reset();
    };
};


// Esta es la función para que el usuario ingrese a la página con correo y contraseña
export const signInUser = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const warningEmail = document.getElementById('warning-em');
  const warningPassword = document.getElementById('warning-pw');
  if (email === '' || password === ''){
    warningEmail.innerHTML = 'Completa el correo.';
    warningPassword.innerHTML = 'Completa la contraseña.';
  } else {
  signIn(email, password)
    .then(() => changeHash('#/wall'))
    .catch(() => {});
  alert('Iniciaste sesión con éxito');
  document.getElementById('frm-login').reset();
  }
}

export const addPublishOnSubmit = (event) => {
  event.preventDefault();
  // const txtPost = document.getElementById('txt-post').value;
  const security = document.getElementById('select-security').value;
  const input = document.getElementById('txt-post');
  const snackbarContainer = document.getElementById('demo-snackbar');
  // data que muestra el snackbar
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };
  if(input.value!=='')addPublish(input.value, security)
  else alert ('Debe ingresar texto en el post para publicar')
};

export const deletePublishOnClick = (objPost) => {
  if (confirm('¿Está seguro de eliminar este post?')){
    deletePublish(objPost.id)
  }
};

export const editPublishOnClick = () => {
  editPublish('804k6CB50Iv5HzmdLRMO', 'Cambiando este texto')
};
document.getElementById('editar').addEventListener('click', editPublishOnClick);