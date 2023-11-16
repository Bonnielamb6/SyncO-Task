
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
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

const auth = getAuth();

// Getting all the objects of html
// var user = document.getElementById("user");
var password = document.getElementById("password");
var email = document.getElementById("user");

window.login = function(e){
    e.preventDefault();
    var obj = {
        email : email.value,
        password : password.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        console.log(user.uid)
        alert("Logged in Successfully")
    })
    .catch(function(err){
        alert("login error " + err)
    })
    console.log(obj)
}