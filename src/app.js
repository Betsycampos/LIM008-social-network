// const config = {
//   apiKey: "AIzaSyCrRlTuGI-KAzq1mzZ84cV68rReO1dp1e4",
//   authDomain: "redsocial-8c128.firebaseapp.com",
//   databaseURL: "https://redsocial-8c128.firebaseio.com",
//   projectId: "redsocial-8c128",
//   storageBucket: "redsocial-8c128.appspot.com",
//   messagingSenderId: "614216668686"
// };
// firebase.initializeApp(config);

// export const createUser = (email, password) => {
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// };

// const btnFb = document.getElementById('fb');
// btnFb.addEventListener('click', () => {
//     // FB.getLoginStatus(function(response) {
//     //     console.log("esto es el obj resultado: " + statusChangeCallback(response));
         
//     // });
//     alert('hola');
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         // console.log(token);
//         // The signed-in user info.
//         var user = result.user;
//         console.log('hola' + user);
        
//         // ...
//       }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         console.log(errorCode);
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         // The email of the user's account used.
//         var email = error.email;
//         console.log(email);
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         console.log(credential);
//         // ...
//       });
//       firebase.auth().signInWithRedirect(provider);
//       firebase.auth().getRedirectResult().then(function(result) {
//         if (result.credential) {
//           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//           var token = result.credential.accessToken;
//           // ...
//         }
//         // The signed-in user info.
//         var user = result.user;
//       }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         console.log(errorCode);
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         // The email of the user's account used.
//         var email = error.email;
//         console.log(email);
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         console.log(credential);
//         // ...
//       });
// });