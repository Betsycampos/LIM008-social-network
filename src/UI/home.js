import {changeTemplate, initRouter} from '../router.js'
export default () => {

  const formElem = document.createElement('form');
  const formContent = `
    <div class="home">
      <button id="btn-frm-register" class="btns-home font-bio" type="button">Regístrate</button>
      <button id="btn-frm-login" class="btns-home font-bio" type="button">Ingresa</button>
    </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  
  const btnFormRegister = formElem.querySelector('#btn-frm-register');
  btnFormRegister.addEventListener('click', () => {
   window.location.hash = '#/register';
   });

  const btnFormLogin = formElem.querySelector('#btn-frm-login');
   btnFormLogin.addEventListener('click', () => {
    window.location.hash = '#/login';
  });
  // EVITAR COMPORTAMIENTO DEL BOTON
  return formElem;
};