import { signInUser } from '../view-controller.js'
import { authenticationGoogle, authenticationFacebook } from '../firebase-controller.js';

export default () => {
  const formElem = document.createElement('form');
  const formContent = `<div>
      <h2>INICIA SESIÓN</h2>
      <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
      <div> 
        <input id="email" type="text" placeholder="Correo">
        <p id="warning-em" class="warning"></p>
        <input id="password" type="password" placeholder="Contraseña">
        <p id="warning-pw" class="warning"></p>
      </div>
      <button id="btn-login" type="button" class="btn-registrar">Ingresa</button>
      <div>
        <label>O ingresa a través de:</label>
        <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
        <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
      </div>
    </div>`;
  formElem.setAttribute('id', 'frm-login');
  formElem.innerHTML = formContent;

  const btnLogin = formElem.querySelector('#btn-login');
  btnLogin.addEventListener('click', signInUser);
  const authFacebook = formElem.querySelector('#auth-fb'); 
  authFacebook.addEventListener('click', authenticationFacebook); 
  const authGoogle = formElem.querySelector('#auth-google');
  authGoogle.addEventListener('click', authenticationGoogle);
  return formElem;
};