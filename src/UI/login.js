import { signInUser, authGooogleOnClick, authWithFacebookOnClick } from '../view-controller.js'
import { authenticationGoogle, authenticationFacebook } from '../firebase-controller.js';

export default () => {
  const formElem = document.createElement('form');
  const formContent = `<div>
      <h2>INICIA SESIÓN</h2>
      <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
      <div> 
        <i class="fas fa-user"></i>
        <input id="email" type="text" placeholder="Usuario">
        <p id="warning-em" class="warning"></p>
        <i class="fas fa-unlock-alt"></i>
        <input id="password" type="password" class="text_password" placeholder="Contraseña">
        <p id="warning-pw" class="warning"></p>
      </div>
      <button id="btn-login" type="button" class="btn-registrar">Ingresa</button>
      <div class= "color-txt-link">Si no tiene una cuenta <a id = "link-register" class = "link-btn link">REGISTRATE AQUÍ</a></div>
      <div>
        <label>O ingresa a través de:</label>
        <div>
          <img id="auth-fb" alt="ico-fb" class="ico-fb link-btn" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
          <img id="auth-google" alt="ico-google" class="ico-google link-btn" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
        </div>
      </div>
    </div>`;
  formElem.setAttribute('id', 'frm-login');
  formElem.innerHTML = formContent;
  document.getElementById('profile').innerHTML = '';
  document.getElementById('advertising').innerHTML = '';
  const linkRegister = formElem.querySelector('#link-register');
  linkRegister.addEventListener('click',  () => {
    window.location.hash = '#/register';
  });
  const btnLogin = formElem.querySelector('#btn-login');
  btnLogin.addEventListener('click', signInUser);
  const authFacebook = formElem.querySelector('#auth-fb'); 
  authFacebook.addEventListener('click', authWithFacebookOnClick); 
  const authGoogle = formElem.querySelector('#auth-google');
  authGoogle.addEventListener('click', authGooogleOnClick);
  return formElem;
};