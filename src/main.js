const config = {
  apiKey: "AIzaSyCrRlTuGI-KAzq1mzZ84cV68rReO1dp1e4",
  authDomain: "redsocial-8c128.firebaseapp.com",
  databaseURL: "https://redsocial-8c128.firebaseio.com",
  projectId: "redsocial-8c128",
  storageBucket: "redsocial-8c128.appspot.com",
  messagingSenderId: "614216668686"
};
firebase.initializeApp(config);

import { emailValidation, createUser } from './lib/index.js';
// import { createUser } from 'app.js';

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confPassword = document.getElementById('conf-password').value;

const warningEmail = document.getElementById('warning-em');
const warningPassword = document.getElementById('warning-pw');
const warningConfirmP = document.getElementById('warning-cf');

//Se debe importar la función de firebase
//Antes de que se hagan las funciones debe haber la validación de

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


// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();