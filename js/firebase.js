//conexion a firebase, firestore y credenciales
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

  import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHzMr6ObPfz7mjF41mgBw0pmE6hZvCNos",
  authDomain: "sync-o-task.firebaseapp.com",
  databaseURL: "https://sync-o-task-default-rtdb.firebaseio.com",
  projectId: "sync-o-task",
  storageBucket: "sync-o-task.appspot.com",
  messagingSenderId: "697125638171",
  appId: "1:697125638171:web:e2e317ecb5d2df9c59a8be"
};
    
// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbLife = getDatabase(app);
export const auth = getAuth(app);


/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 * @param {string} dueDate the due date of the Task
 * @param {string} priority the priority of the Task
 * @param {string} tags the priority of the Task
 */
export const saveTask = (title, description, dueDate, priority, tags) =>
  addDoc(collection(db, "tasks"), { title, description, dueDate, priority, tags });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 * Update an existing Task in Firestore
 * @param {string} id Task ID
 * @param {Object} newFields Updated fields, including title, description, and dueDate
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));


// making a function for create an authenticator
export function signUp(obj) {
  var objUser = {
      email: obj.email,
      password: obj.password,
      username: obj.username,
      firstName: obj.firstName,
      lastName: obj.lastName,
      userType: obj.userType
  };
  createUserWithEmailAndPassword(auth, objUser.email, objUser.password)
      .then(function (success) {
          alert("Signup Successfully")
          window.location.replace('index.html')
      })
      .catch(function (err) {
          alert("Error in " + err)
      });
      saveUserData(objUser);
  console.log(obj);
}

export function saveUserData(obj) {
  var objUser = {
    email: obj.email,
    password: obj.password,
    username: obj.username,
    firstName: obj.firstName,
    lastName: obj.lastName,
    userType: obj.userType
  };

  const userRef = ref(dbLife, 'user/' + objUser.username);

  set(userRef, {
    username: objUser.username,
    email: objUser.email,
    firstName: objUser.firstName,
    lastName: objUser.lastName,
    userType: objUser.userType,
  }).then(()=>{
    window.location.href = 'index.html';
  }).catch((error)=> {
    alert("Unsuccesful");
    console.log(error);
  })
}


// making a function for authenticate an user
export function signIn(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then(function(success){
      alert("Logged in Successfully")
  })
  .catch(function(err){
      alert("login error " + err)
  })
}






