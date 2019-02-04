export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div>
    <textarea id="txt-post" cols="30" rows="10" placeholder="¿Qué quieres publicar?"></textarea>
    <select id="select-security">
      <option value="only-me">Solo yo</option>
      <option value="friends">Amigos</option>
    </select>
    <button id="btn-publish">Publicar</button>
  </div>
  `;
  formElem.setAttribute('id', 'frm-wall');
  formElem.innerHTML = formContent;
  return formElem;
}