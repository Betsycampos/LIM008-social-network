import { createUser, signIn, addPublish, deletePublish, editPublish, userData, createProfile, authenticationGoogle } from './firebase-controller.js';
import { emailValidation } from './lib/index.js';

const changeHash = (hash) =>  {
  location.hash = hash;
};

export const registerWithEmailAndPassword = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confPassword = document.getElementById('conf-password').value;
  const warningName = document.getElementById('warning-na');
  const warningEmail = document.getElementById('warning-em');
  const warningPassword = document.getElementById('warning-pw');
  const warningConfirmP = document.getElementById('warning-cf');
  if (email === '' && password === '' && confPassword === '' && name === ''){
    warningName.innerHTML = 'Completa el nombre.';
    warningEmail.innerHTML = 'Completa el correo.';
    warningPassword.innerHTML = 'Completa la contraseña.';
    warningConfirmP.innerHTML = 'Confirma la contraseña ingresada.';
  } else if(password !== confPassword){
    warningConfirmP.innerHTML = 'La contraseña ingresada debe coincidir con este campo.';
  } else if (!emailValidation(email)){
    warningEmail.innerHTML = 'El correo debe contener @ y .';
  } else {
    warningName.innerHTML = '';
    warningEmail.innerHTML = '';
    warningPassword.innerHTML = '';
    warningConfirmP.innerHTML = '';
    
    createUser(email, password)
    .then(() => createProfile(email, name))
    .then(() => changeHash('#/wall'))
    .catch(() => {});
    alert('Usuario registrado');
    document.getElementById('frm-register').reset();
    };
};


// Esta es la función para que el usuario ingrese a la página con correo y contraseña
export const signInUser = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const warningEmail = document.getElementById('warning-em');
  const warningPassword = document.getElementById('warning-pw');
  if (email === '' || password === ''){
    warningEmail.innerHTML = 'Completa el correo.';
    warningPassword.innerHTML = 'Completa la contraseña.';
  } else {
  signIn(email, password)
    .then(() => changeHash('#/wall'))
    .catch(() => {});
  alert('Iniciaste sesión con éxito');
  document.getElementById('frm-login').reset();
  }
}

export const authGooogleOnClick = () => {
  authenticationGoogle()
    .then(() => changeHash('#/wall'))
}

export const addPublishOnSubmit = (event) => {
  event.preventDefault();
  const security = document.getElementById('select-security').value;
  const input = document.getElementById('txt-post');
  if(input.value!==''){
    const email = userData();
    addPublish(email, input.value, security)
    .then((docRef) =>{
        //alert('Su post se agrego con éxito ', docRef.id);
      } )
      .catch((error) =>{
        alert('Su post no puede ser publicado: ', error);
      })
  }
  else alert ('Debe ingresar texto en el post para publicar')
};

export const deletePublishOnClick = (objPost) => {
  if (confirm('¿Está seguro de eliminar este post?')){
    deletePublish(objPost.id)
  }
};

export const editPublishOnClick = (objPost) => {
  // event.preventDefault();
  const textEditPost = document.getElementById(`text-edit`);
  console.log("esto es objPost: "+ textEditPost.value);
 editPublish(objPost.id, textEditPost.value);
// .addEventListener('click', editPublishOnClick);
};