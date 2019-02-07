import { addPublishOnSubmit, deletePublishOnClick, editPublishOnClick } from "../view-controller.js";

const itemPublish = (objPublish) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
  <div id="post1-${objPublish.id}">
    <div>
      <button id="btn-delete-${objPublish.id}" class="link-delete"></button>
      <div class="title-post">${objPublish.email}</div>
      <div id="post-${objPublish.id}">
        <div class="container-post">${objPublish.post}</div>
      </div>
    </div>
    <div id="btn">
       <button type="button" id="btn-edit" class="btn-wall">Editar</button>
    <div id="btn-${objPublish.id}">
    </div>
  </div>
    `;
    divElement.querySelector('#btn-edit')
    .addEventListener('click', () => {
      divElement.querySelector(`#post1-${objPublish.id}`).innerHTML = `
      <form  id ="frm-save">
        <textarea id="text-edit">${objPublish.post}</textarea>;
        <button id="btn-save-${objPublish.id}" class="btn-wall">Guardar</button>
      </form>`
     
      const btnSave = document.getElementById(`btn-save-${objPublish.id}`);
       btnSave.addEventListener('click', () => editPublishOnClick(objPublish));  
       
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
  <div class="center-items">
    <textarea id="txt-post" cols="30" rows="10" placeholder="¿Qué quieres publicar?" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></textarea>
    <select id="select-security" class="select-security">
      <option value="only-me">Solo yo</option>
      <option value="friends">Amigos</option>
    </select>
    <button id="btn-publish" class="btn-wall">Publicar</button>
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



