const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;
    if(password===rePassword){
        // { "error" : { "errores" : [ { "dominio" : "global" , "razón" : "inválido" , "mensaje" : "CREDENTIAL_TOO_OLD_LOGIN_AGAIN" } ], "código" : 400 , "mensaje" : "CREDENTIAL_TOO_OLD_LOGIN_AGAIN " } }

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
        });
    }else alert('Contraseña y confirmar contraseña deben coincidir');
});
const btnFb = document.getElementById('fb');
btnFb.addEventListener('click', () => {
    // FB.getLoginStatus(function(response) {
    //     console.log("esto es el obj resultado: " + statusChangeCallback(response));
         
    // });
    alert('hola');
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log('hola' + user);
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
      });
});