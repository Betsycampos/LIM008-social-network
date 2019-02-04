import { addPublishOnSubmit } from "../view-controller.js";

const itemPublish = (objPublish) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <div>
      <span>${objPublish.email}</span>
    </div>
    <a id="btn-deleted-${objPublish.id}">
      <i>delete</i>
    </a>
  `;
  // agregando evento de click al btn eliminar una publicación
  liElement.querySelector(`#btn-deleted-${objPublish.id}`)
    .addEventListener('click', () => deletePublishOnClick(objPublish));
  return liElement;
}

export default (post) => {
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
      <!-- Publishs -->
    <section>
      <ul id="publish-list">
      </ul>
    </section>

    <!-- snackbar -->
    <div id="demo-snackbar">
      <div></div>
      <button type="button"></button>
    </div>`;
  formElem.setAttribute('id', 'frm-wall');
  formElem.innerHTML = formContent;
  const btnPublish = formElem.querySelector('#btn-publish');
  const ul = formElem.querySelector('#publish-list');
  post.forEach(data => {
    ul.appendChild(itemPublish(data));
  });
  btnPublish.addEventListener('click', addPublishOnSubmit);
  return formElem;
}