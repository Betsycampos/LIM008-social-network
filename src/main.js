const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');

const warningEmail = document.getElementById('warning-em');
const warningPassword = document.getElementById('warning-pw');
const warningConfirmP = document.getElementById('warning-cf');

//Se debe importar la función de firebase
//Antes de que se hagan las funciones debe haber la validación de


if (email === '' && password === '' && confPassword === ''){
    warningEmail.innerHTML = 'Completa el correo.';
    warningPassword.innerHTML = 'Completa la contraseña.';
    warningConfirmP.innerHTML = 'Confirma la contraseña ingresada.';
}
// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();