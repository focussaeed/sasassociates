  // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyASYPOJWncBSEO006JP190HfTjuUXlzhPk",
    authDomain: "sasassociates-92f5f.firebaseapp.com",
    databaseURL: "https://sasassociates-92f5f-default-rtdb.firebaseio.com/",
    projectId: "sasassociates-92f5f",
    storageBucket: "sasassociates-92f5f.appspot.com",
    messagingSenderId: "117363517091",
    appId: "1:117363517091:web:c8be64e7aaa3fc4082c116"
  };

  // Initialize Firebase
  var  app = firebase.initializeApp(firebaseConfig);

  //  Data sending in firebase data base
  
  function sendindataBase() {

    var dataBase = firebase.database();
    var dataRef = dataBase.ref('userData');
    var dataUser = dataRef.once
    console.log(dataUser);

    var email = document.getElementById("email");
    var passw = document.getElementById("pass");
    var name = document.getElementById("name")
    var phone = document.getElementById("phone")
    var address = document.getElementById("address")

    var userObj = {

      userName: name.value,
      userPhone: phone.value,
      userAddress: address.value,
   };
 
   firebase
     .database()
     .ref("userData/" + phone.value)
     .set(userObj);
  }






  /* ******************* Sign up funtion  ******************** */

function signUp() {

    var email = document.getElementById("email");
    var passw = document.getElementById("pass");
    // var name = document.getElementById("name")
    // var phone = document.getElementById("phone")
    // var address = document.getElementById("address")


    // var dataBase = firebase.database();
    // var dataRef = dataBase.ref('userData');
    // var dataUser = dataRef.once
    // console.log(dataUser);
  
  
    // firebase
    // .database()
    // .ref("userData")
    // .once("value", function (data) {    //value word and data word can not be changed
    //   var dataUser = data.val();
    //   console.log(dataUser);
    //   console.log(data.val());          // data.val word can not be changed
        
    // });

    // var userObj = {

    //     userName: name.value,
    //     userPhone: phone.value,
    //     userAddress: address.value,
    //  };
   
    //  firebase
    //    .database()
    //    .ref("userData/" + phone.value)
    //    .set(userObj);

    firebase.auth().createUserWithEmailAndPassword(email.value, passw.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);

      firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
    alert("Varification email sent..........")
    // Email verification sent!
    // ...
  });
  sendindataBase()

  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
     
 })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
    
};

/* ******************* Sign in funtion  ******************** */

function signIn() {

    var email = document.getElementById("email");
    var passw = document.getElementById("pass");  
    
    firebase.auth().signInWithEmailAndPassword(email.value, passw.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);

      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  
  };

/* ******************* Forgot Password Code ******************** */

function forGotPassword() {

    var email = document.getElementById("email");
  
    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {
      alert("Password reset email sent..............")
  
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
  }


 /* ******************* Sign Up with Google Account Code ******************** */

function gowithGoogle() {
    alert("google Verification")
  
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // IdP data available in result.additionalUserInfo.profile.
      // ...

      sendindataBase();

    })
    
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

/* ******************* Sign Up with Github Account Code ******************** */

function gowithGithub() {
    alert("github Verification")
     var provider = new firebase.auth.GithubAuthProvider();
   
     firebase
     .auth()
     .signInWithPopup(provider)
     .then((result) => {
       /** @type {firebase.auth.OAuthCredential} */
       var credential = result.credential;
   
       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
       var token = credential.accessToken;
   
       // The signed-in user info.
       var user = result.user;
       console.log(user);
       // IdP data available in result.additionalUserInfo.profile.
         // ...

         sendindataBase()
     })
     
     .catch((error) => {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       console.log(errorMessage);
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       // ...
     });
   }

