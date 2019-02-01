import { createUser } from './firebase-controller.js';
import { emailValidation } from './lib/index.js';



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
      // .then(() => changeHash('#/wall'))
      // .catch(() => {});
      alert('Usuario registrado');
      document.getElementById('frm-register').reset();
    };
};

// Esta es la función para que el usuario ingrese a la página con correo y contraseña
export const loginUserWithEmailAndPassword = () => {

}