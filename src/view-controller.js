import { createUser, signIn, addPublish, deletePublish, editPublish, userData, confirmUniqueProfile, authenticationGoogle, authenticationFacebook, signOut } from './firebase-controller.js';
import { emailValidation } from './lib/index.js';

const changeHash = (hash) => {
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
  if (name === '') {
    warningName.innerHTML = '';
    warningName.innerHTML = 'Completa el nombre.';
  } else {
    warningName.innerHTML = '';
    if (email === '') {
      warningEmail.innerHTML = '';
      warningEmail.innerHTML = 'Completa el correo.';
    } else {
      warningEmail.innerHTML = '';
      if (!emailValidation(email)) {
        warningEmail.innerHTML = '';
        warningEmail.innerHTML = 'El correo debe contener @ y .';
      } else {
        warningEmail.innerHTML = '';
        if (password === '') {
          warningPassword.innerHTML = '';
          warningPassword.innerHTML = 'Completa la contraseña.';
        } else {
          if (password.length <= 5 || password.length >= 11) {
            warningPassword.innerHTML = '';
            warningPassword.innerHTML = 'La contraseña de tener de 6 a 10 caracteres.';
          } else {
            warningPassword.innerHTML = '';
            if (confPassword === '') {
              warningConfirmP.innerHTML = '';
              warningConfirmP.innerHTML = 'Confirma la contraseña ingresada.';
            } else {
              warningConfirmP.innerHTML = '';
              if (password !== confPassword) {
                warningConfirmP.innerHTML = '';
                warningConfirmP.innerHTML = 'La contraseña ingresada debe coincidir con este campo.';
              } else {
                warningConfirmP.innerHTML = '';
                createUser(email, password)
                  .then(() =>{ 
                    confirmUniqueProfile(email, name);
                    alert('Usuario registrado');
                    changeHash('#/wall');
                  })
                  .catch((error) => {console.log(error) });
                
                document.getElementById('frm-register').reset();
              }
            }
          }
        }
      }
    }
  };
};

  // Esta es la función para que el usuario ingrese a la página con correo y contraseña
  export const signInUser = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const warningEmail = document.getElementById('warning-em');
    const warningPassword = document.getElementById('warning-pw');
    if (email === '' || password === '') {
      warningEmail.innerHTML = 'Completa el correo.';
      warningPassword.innerHTML = 'Completa la contraseña.';
    } else {
      signIn(email, password)
        .then(() => changeHash('#/wall'))
        .catch(() => { });
      // document.getElementById('frm-login').reset();
    }
  };

  export const authWithGoogleOnClick = () => {
    authenticationGoogle()
      .then(() => changeHash('#/wall'));
  };

  export const authWithFacebookOnClick = () => {
    authenticationFacebook()
      .then(() => changeHash('#/wall'));
  };

  export const authGooogleOnClick = () => {
    authenticationGoogle()
      .then(() => changeHash('#/wall'))
  }

  export const logoutOnClick = () => {
    signOut()
      .then(() => changeHash('#/home'))
      .catch(() => {})
  };

  export const addPublishOnSubmit = (event) => {
    event.preventDefault();
    const security = document.getElementById('select-security').value;
    const input = document.getElementById('txt-post');
    if (input.value !== '') {
      const email = userData();
      addPublish(email, input.value, security)
        .catch((error) => {
          alert('Su post no puede ser publicado: ', error);
        })
    }
    else alert('Debe ingresar texto en el post para publicar');
  };

  export const deletePublishOnClick = (objPost) => {
    if (confirm('¿Está seguro de eliminar este post?'))
      return deletePublish(objPost.id);
  };

  export const editPublishOnClick = (objPost) => 
    editPublish(objPost.id, document.getElementById('text-edit').value);