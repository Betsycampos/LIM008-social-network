import { configFirebase } from './config.js';
import { initRouter } from './router.js';

window.addEventListener('load', () => {
  configFirebase();
  initRouter();
});