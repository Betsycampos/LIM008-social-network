import { addPublishOnSubmit, deletePublishOnClick } from "../view-controller.js";

const itemPublish = (objPublish) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div>
      <div class="title-post">${objPublish.email}</div>
      <div id="post-${objPublish.id}">
        <div class="container-post">${objPublish.post}</div>
      </div>
    </div>
    <div id="btn-${objPublish.id}">
      <a id="btn-delete-${objPublish.id}" class="link-delete">
        <i>Eliminar</i>
      </a>
      <button type="button" id="btn-edit-${objPublish.id}">Editar</button>
    </div>
    `;
    divElement.querySelector(`#btn-edit-${objPublish.id}`)
    .addEventListener('click', () => {
      divElement.querySelector(`#post-${objPublish.id}`).innerHTML = `
      <textarea>${objPublish.post}</textarea>`;
      divElement.querySelector(`#btn-${objPublish.id}`).innerHTML = `
      <button>Guardar</button>`;
    });
  // Agregando css con fondo de la caja (divElement)
  divElement.setAttribute('class', 'post-background');
  // Agregando evento de click al btn eliminar una publicación
  divElement.querySelector(`#btn-delete-${objPublish.id}`)
    .addEventListener('click', () => deletePublishOnClick(objPublish));
  return divElement;
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
      <div id="publish-list">
      </div>
    </section>

    <!-- snackbar -->
    <div id="demo-snackbar">
      <div></div>
      <button type="button"></button>
    </div>`;
  formElem.setAttribute('id', 'frm-wall');
  formElem.innerHTML = formContent;
  const btnPublish = formElem.querySelector('#btn-publish');
  const divContinerPost = formElem.querySelector('#publish-list');
  post.forEach(data => {
    divContinerPost.appendChild(itemPublish(data));
  });
  btnPublish.addEventListener('click', addPublishOnSubmit);
  return formElem;
}