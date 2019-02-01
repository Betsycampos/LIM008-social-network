export default () => {
  const formElem = document.createElement('form');
  const formContent = `
    <div>
      <button id="btn-frm-register">Regístrate</button>
      <button id="btn-enter" href="#/login">Ingresa</button>
    </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  
  const btnFormRegister = formElem.querySelector('#btn-frm-register');
  btnFormRegister.addEventListener('click', () => {
    btnFormRegister.setAttribute('href', '#/register');
  });
  return formElem;
};