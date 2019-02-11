export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div class="home">
    <div>
      <button id="btn-frm-register" class="btns-home font-bio" type="button">Regístrate</button>
      </div>
      <div>
      <button id="btn-frm-login" class="btns-home font-bio" type="button">Ingresa</button>
    </div>
    </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  document.getElementById('profile').innerHTML = '';
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