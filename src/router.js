import register from './UI/register.js';
import home from './UI/home.js';
import login from './UI/login.js';
import wall from './UI/wall.js';

export const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
    case 'home': {
      container.innerHTML = '';
      container.appendChild(home());
      break;
    }
    case 'register': {
      container.innerHTML = '';
      container.appendChild(register());
      break;
    }
    case 'login': 
      container.appendChild(login());
      break;
    case 'wall':
      container.appendChild(wall());
      break;
  }
};

const changeTemplate = (hash) => {
  if(hash === '#/' || hash === '' || hash === '#' || hash === '#/home'){
    return viewTemplate('#/home');
  } else if(hash === '#/register' || hash === '#/login' || hash === '#/wall'){
    return viewTemplate(hash);
  }
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTemplate(window.location.hash)
}