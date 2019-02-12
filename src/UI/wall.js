import { addPublishOnSubmit, deletePublishOnClick, editPublishOnClick } from "../view-controller.js";
import {securityPost} from "../firebase-controller.js"

const itemPublish = (objPublish) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
  <div id="post1-${objPublish.id}">
    <div>
      <button id="btn-delete-${objPublish.id}" class="link-delete" type="button"></button>
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
        <button id="btn-save-${objPublish.id}" type="button" class="btn-wall">Guardar</button>
      </form>`
     
      const btnSave = document.getElementById(`btn-save-${objPublish.id}`);
       btnSave.addEventListener('click', () => editPublishOnClick(objPublish));  
      //  divElement.querySelector('#post-all')
      // .addEventListener('click', securityPost);
    
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
  <div class="container-add-post">
    <textarea id="txt-post" cols="30" rows="10" placeholder="¿Qué quieres publicar?"></textarea>
    <div class="align-left">
      <select id="select-security" class="select-security">
        <option id="me"value="only-me">Solo yo</option>
        <option value="friends">Amigos</option>
      </select>
      <button type= "button" id="post-me" class="btn-only">Solo yo</button>
      <button type= "button" id="post-friends class="btn-friends">Amigos</button>     
      <button id="btn-publish" type="button" class="btn-wall">Publicar</button>
    </div>
  </div>
  <!-- Publishs -->
  <section>
    <div id="publish-list">
    </div>
  </section>
  <!-- snakbar -->
  <div id="demo-snackbar">
  </div>`;
  
  formElem.setAttribute('id', 'frm-wall');
  formElem.innerHTML = formContent;
  const btnPublish = formElem.querySelector('#btn-publish');
  btnPublish.setAttribute('class', 'btn-wall');
  const divContainerPost = formElem.querySelector('#publish-list');
  formElem.querySelector('#post-me').addEventListener('click',() => {
 
  });
  

  //return securityOnClick('friends')
    //.then((result) => {
    
      //console.log(result)
    //  result.forEach(data => {
    //       divContainerPost.appendChild(itemPublish(data));
    //    });
    //})
    // securityArray.forEach(data => {
    //   divContainerPost.appendChild(itemPublish(data));
    // });
  
  

  post.forEach(data => {
    divContainerPost.appendChild(itemPublish(data));
  });
  
  btnPublish.addEventListener('click', addPublishOnSubmit);
  return formElem;
  
}



