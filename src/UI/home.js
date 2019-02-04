import {changeTemplate, initRouter} from '../router.js'
export default () => {
  const formElem = document.createElement('form');
  const formContent = `
    <div>
      <button id="btn-frm-register">Regístrate</button>
      <button id="btn-frm-login">Ingresa</button>
    </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  
  const btnFormRegister = formElem.querySelector('#btn-frm-register');
  btnFormRegister.addEventListener('click', () => {
    console.log(changeTemplate(window.location['#/register']));
   });

  const btnFormLogin = formElem.querySelector('#btn-frm-login');
   btnFormLogin.addEventListener('click', () => {
    changeTemplate(location['#/login']);
  });
  return formElem;
};