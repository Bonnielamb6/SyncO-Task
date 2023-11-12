
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHzMr6ObPfz7mjF41mgBw0pmE6hZvCNos",
    authDomain: "sync-o-task.firebaseapp.com",
    projectId: "sync-o-task",
    storageBucket: "sync-o-task.appspot.com",
    messagingSenderId: "697125638171",
    appId: "1:697125638171:web:e2e317ecb5d2df9c59a8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()  

// Getting all the objects of html
var user = document.getElementById("user")
var password = document.getElementById("password")
var email = document.getElementById("email")

 // making a function for storing data
 window.signup = function(e){
    e.preventDefault();
    var obj = {
        user : user.value,
        password : password.value,
        email : email.value,
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
        alert("Signup Successfully")
        window.location.replace('index.html')
    })
    .catch(function(err){
        alert("Error in " + err)
    });
    console.log(obj);
 }
