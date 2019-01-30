import { objTemp } from './tempString.js'
import { configFirebase } from './config.js';
import { emailValidation } from './lib/index.js';
import { createUser, authenticationGoogle, authenticationFb } from './app.js';

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length -2);
  const container = document.getElementById('container');
  container.innerHTML = objTemp[router];
};

configFirebase();

const registerWithEmailAndPassword = () => {
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
    createUser(email, password);
    alert('Usuario registrado');
    document.getElementById('frm-register').reset();
  };
};

// Pintando templates
const newForm = (id, hash, selectFunction) => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', id);
  formElem.innerHTML = hash;
  formElem.addEventListener('submit', selectFunction);
};

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash ==='#'){
    return viewTmp('#/home');
  } else if (hash === '#/register'){
    viewTmp(hash);
    const formElem = document.createElement('form');
    formElem.setAttribute('id', 'frm-register');
    formElem.innerHTML = objTemp.register;
    console.log(formElem);
    const btnSubmit = document.getElementsByTagName('button')[0];
    console.log(btnSubmit);
    btnSubmit.addEventListener('click', registerWithEmailAndPassword());
  }
};

// || hash === "#/wall" || hash === "#/login"

window.addEventListener('load', changeTmp(window.location.hash));
if (('onchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);




// const btnSubmit = document.getElementById('btn-submit');
// btnSubmit.addEventListener('click', () => {
  
// });

// Autentificación con Google
// const authGoogle = document.getElementById('auth-google');
// authGoogle.addEventListener('click', () => {
//   authenticationGoogle();
// });

// // Autentificación con Facebook
// const authFb = document.getElementById('auth-fb');
// authFb.addEventListener('click', () => {
//   authenticationFb();
// });

