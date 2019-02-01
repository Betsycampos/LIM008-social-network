import { registerWithEmailAndPassword } from '../view-controller.js';
import { authenticationGoogle, authenticationFacebook } from '../app.js';

export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div>
    <h2>REGÍSTRATE</h2>
    <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
    <div> 
      <input id="email" type="text" placeholder="Correo">
      <p id="warning-em" class="warning"></p>
      <input id="password" type="password" placeholder="Contraseña">
      <p id="warning-pw" class="warning"></p>
      <input id="conf-password" type="password" placeholder="Confirmar Contraseña">
      <p id="warning-cf" class="warning"></p>
    </div>
    <button id="btn-register" type="button" class="btn-registrar">Regístrate</button>
    <div>
      <label>O ingresa a través de:</label>
      <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
      <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
    </div>
  </div>`;
  formElem.setAttribute('id', 'frm-register');
  formElem.innerHTML = formContent;
  // Seleccionando elementos del DOM
  const btnRegister = formElem.querySelector('#btn-register');
  btnRegister.addEventListener('click', registerWithEmailAndPassword);
  const authFacebook = formElem.querySelector('#auth-fb'); 
  authFacebook.addEventListener('click', authenticationFacebook); 
  const authGoogle = formElem.querySelector('#auth-google');
  authGoogle.addEventListener('click', authenticationGoogle);
  return formElem;
};