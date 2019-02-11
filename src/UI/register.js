import { registerWithEmailAndPassword, authWithGoogleOnClick, authWithFacebookOnClick } from '../view-controller.js';

export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div>
    <h2>REGÍSTRATE</h2>
    <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
    <div> 
      <input id="name" type="text" placeholder="Nombre" class="input-rg-li font-bio">
      <p id="warning-na" class="warning"></p>
      <input id="email" type="text" placeholder="Correo" class="input-rg-li font-bio">
      <p id="warning-em" class="warning"></p>
      <input id="password" type="password" placeholder="Contraseña" class="input-rg-li font-bio">
      <p id="warning-pw" class="warning"></p>
      <input id="conf-password" type="password" placeholder="Confirmar Contraseña" class="input-rg-li font-bio">
      <p id="warning-cf" class="warning"></p>
    </div>
    <button id="btn-register" type="button" class="btn-registrar font-bio link-btn">Regístrate</button>
    <div>Si ya tiene una cuenta <a id = "link-login" class = "link-btn">INGRESA AQUÍ</a></div>
    <div>
      <label class="font-bio">O ingresa a través de:</label>
    </div>
    <div>
      <img id="auth-fb" alt="ico-fb" class="ico-fb link-btn" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
      <img id="auth-google" alt="ico-google" class="ico-google link-btn" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
    </div>
  </div>`;
  formElem.setAttribute('id', 'frm-register');
  formElem.innerHTML = formContent;
  document.getElementById('profile').innerHTML = '';
  document.getElementById('advertising').innerHTML = '';
  const linkLogin = formElem.querySelector('#link-login');
  linkLogin.addEventListener('click',  () => {
    window.location.hash = '#/login';
  });
  const btnRegister = formElem.querySelector('#btn-register');
  btnRegister.addEventListener('click', registerWithEmailAndPassword);
  const authFacebook = formElem.querySelector('#auth-fb'); 
  authFacebook.addEventListener('click', authWithFacebookOnClick); 
  const authGoogle = formElem.querySelector('#auth-google');
  authGoogle.addEventListener('click', authWithGoogleOnClick);
  return formElem;
};