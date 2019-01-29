import { configFirebase } from './config.js';
import { emailValidation } from './lib/index.js';
import { createUser, authenticationGoogle, authenticationFb } from './app.js';

configFirebase();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confPassword = document.getElementById('conf-password').value;

const warningEmail = document.getElementById('warning-em');
const warningPassword = document.getElementById('warning-pw');
const warningConfirmP = document.getElementById('warning-cf');

const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confPassword = document.getElementById('conf-password').value;
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
    document.getElementById('frm-login').reset();
  };
});

// Autentificación con Google
const authGoogle = document.getElementById('auth-google');
authGoogle.addEventListener('click', () => {
  authenticationGoogle();
});

// Autentificación con Facebook
const authFb = document.getElementById('auth-fb');
authFb.addEventListener('click', () => {
  authenticationFb();
});