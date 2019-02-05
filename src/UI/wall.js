import { addPublishOnSubmit, deletePublishOnClick } from "../view-controller.js";

const itemPublish = (objPublish) => {
  const liElement = document.createElement('li');
  let tagPost = 'textarea';
  liElement.innerHTML = `
    <div>
      <span>${objPublish.email}</span>
      <div id="post-${objPublish.id}">
        <span>${objPublish.post}</span>
      </div>
    </div>
    <div id="btn-${objPublish.id}">
      <a id="btn-delete-${objPublish.id}" class="link-delete">
        <i>Eliminar</i>
      </a>
      <button type="button" id="btn-edit-${objPublish.id}">Editar</button>
    </div>
    `;
  console.log(`${objPublish.id}`);

  liElement.querySelector(`#btn-edit-${objPublish.id}`)
    .addEventListener('click', () => {
      liElement.querySelector(`#post-${objPublish.id}`).innerHTML = `
      <textarea>${objPublish.post}</textarea>`;
      liElement.querySelector(`#btn-${objPublish.id}`).innerHTML = `
      <button>Guardar</button>`;
    });

  // Agregando evento de click al btn eliminar una publicación
  liElement.querySelector(`#btn-delete-${objPublish.id}`)
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