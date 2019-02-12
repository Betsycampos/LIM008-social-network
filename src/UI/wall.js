import { addPublishOnSubmit, deletePublishOnClick, editPublishOnClick, logoutOnClick } from "../view-controller.js";
import {securityPost, increaseLikes } from "../firebase-controller.js"

const itemPublish = (objPublish) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
  <div id="post1-${objPublish.id}">
    <div>
      <button id="btn-delete-${objPublish.id}" class="link-delete" type="button"></button>
      <div class="title-post">${objPublish.email}</div>
      <div id="post-${objPublish.id}">
        <div class="container-post">${objPublish.post}</div>
        <div class="div-likes">
          <a class="btn-like" id="btn-like-${objPublish.id}"></a>
          <p class="p-likes">${objPublish.countLikes}</p>
        </div>
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
      <form id="frm-save">
        <textarea id="text-edit">${objPublish.post}</textarea>;
        <button id="btn-save-${objPublish.id}" type="button" class="btn-wall">Guardar</button>
      </form>`
     
      const btnSave = document.getElementById(`btn-save-${objPublish.id}`);
       btnSave.addEventListener('click', () => editPublishOnClick(objPublish));  
    });
    
  // Agregando css con fondo de la caja (divElement)
  divElement.setAttribute('class', 'post-background');
  // Agregando evento de click al btn eliminar una publicación
  divElement.querySelector(`#btn-delete-${objPublish.id}`)
    .addEventListener('click', () => deletePublishOnClick(objPublish));
  // Agregando evento click al botón like
  divElement.querySelector(`#btn-like-${objPublish.id}`)
    .addEventListener('click', () => {
      increaseLikes(objPublish.id);
    });
  if (window.location.hash === '#/friends' || window.location.hash === '#/wall'){
    divElement.querySelector(`#btn-delete-${objPublish.id}`).setAttribute('class', 'unseen');
    divElement.querySelector(`#btn`).setAttribute('class', 'unseen');
  }
  
  return divElement
}

export default (post) => {
  const formElem = document.createElement('form');
  const formContent = `
  <div class="container-add-post">
    <textarea id="txt-post" cols="30" rows="10" placeholder="¿Qué quieres publicar?"></textarea>
    <div id= "container-textarea" class="align-left">
      <select id="select-security" class="select-security">
        <option id="me"value="only-me">Solo yo</option>
        <option value="friends">Amigos</option>
      </select>    
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
  const divContent = `
    <ul class="nav">
    <li>
      <a class ="menu"><img class="img" src="./img/menu-interface-symbol-of-four-horizontal-lines-with-dots.png" alt=""></a>
      <ul>
        <li><a>Publicaciones</a>
        <ul>
            <li><a id="btn-only-me">Solo yo</a></li>
            <li><a id="btn-friends">Amigos</a></li>
            <li><a id="btn-wall">Público</a></li>
         </ul>
        </li>
        <li><a id="btn-logout">Cerrar sesión</a></li>
      </ul>
     </li>
    </ul>`;
    const advertising=`
    <div>
			<h1>Publicidad 1</h1>
			<p>Texto descriptivo 1</p>
  	</div>
  	<div>
			<h1>Publicidad 2</h1>
			<p>Texto descriptivo 2</p>
    </div>
    <div>
    <h1>Publicidad 3</h1>
    <p>Texto descriptivo 3</p>
  </div>`;
  formElem.setAttribute('id', 'frm-wall');
  formElem.innerHTML = formContent;
  const divProfile = document.getElementById('profile');
  divProfile.innerHTML = divContent;
  const leftMenu = document.getElementById('advertising');
  leftMenu.innerHTML = advertising;
  const btnLogout = divProfile.querySelector('#btn-logout');
  btnLogout.addEventListener('click', (() =>{logoutOnClick()}));
  const btnPublish = formElem.querySelector('#btn-publish');
  btnPublish.setAttribute('class', 'btn-wall');
  const divContainerPost = formElem.querySelector('#publish-list');
  post.forEach(data => {
    divContainerPost.appendChild(itemPublish(data));
  });
  
  btnPublish.addEventListener('click', addPublishOnSubmit);

  divProfile.querySelector('#btn-only-me')
    .addEventListener('click', (evt) => {
      evt.preventDefault();
      window.location.hash = '#/only-me';
  });
  divProfile.querySelector('#btn-friends')
    .addEventListener('click', (evt) => {
      evt.preventDefault();
      window.location.hash = '#/friends';
  });
  divProfile.querySelector('#btn-wall')
    .addEventListener('click', (evt) => {
      evt.preventDefault();
      window.location.hash = '#/wall';
  });

  return formElem;
};
