import { configFirebase } from './config.js';
import { signInWithFacebook, signOut } from './app.js';
import { initRouter } from './router.js';


configFirebase();
initRouter();



// Probando que funcione ingresar con Facebook redireccionando a otro lado
const btnSignInFb = document.getElementById('sign-in-fb');
btnSignInFb.addEventListener('click', () => {
  signInWithFacebook();
  // authenticationFb();
});

// Cerrando sesión
const btnSignOut = document.getElementById('sign-out');
btnSignOut.addEventListener('click', () => {
  signOut();
});