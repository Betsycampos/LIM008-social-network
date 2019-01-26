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