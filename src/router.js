import register from './UI/register.js';
import home from './UI/home.js';
import login from './UI/login.js';
import wall from './UI/wall.js';
import { getPublish } from './firebase-controller.js';
export  const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  // const security = document.getElementById('select-security').value;
  // console.log(security);
  container.innerHTML = '';
  switch (router) {
    case 'home':
      container.appendChild(home());
      break;
    case 'register': 
      container.appendChild(register());
      break;
    case 'login':
    container.appendChild(login());
      break;
    case 'wall': 
    getPublish((post) => {
      container.innerHTML = '';        
      container.appendChild(wall(post));
    })
    break;
  }
};

export const changeTemplate = (hash) => {
  if(hash === '#/register' || hash === '#/login' || hash === '#/wall') return viewTemplate(hash);
  else return viewTemplate('#/home'); 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash)
}