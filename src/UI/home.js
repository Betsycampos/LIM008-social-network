import { viewTemplate, initRouter } from '../router.js'

export default () => {
  const formElem = document.createElement('form');
  const formContent = `
    <div class="home">
      <button id="btn-frm-register" class="btns-home font-bio">Regístrate</button>
      <button id="btn-frm-login" class="btns-home font-bio">Ingresa</button>
    </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  
  const btnFormRegister = formElem.querySelector('#btn-frm-register');
  btnFormRegister.addEventListener('click', () => {
    viewTemplate('#/register');
    btnFormRegister.setAttribute('src', '#/register');
    console.log(btnFormRegister);
    // btnFormRegister.src = '#/register';
  });

  const btnFormLogin = formElem.querySelector('#btn-frm-login');
  btnFormLogin.addEventListener('click', () => {
    btnFormLogin.setAttribute('href', '#/login');
  });
  return formElem;
};