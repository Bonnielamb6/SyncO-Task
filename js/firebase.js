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
 
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxjvd5R8dl4a0qRsjShAOUI-Gt13M50_c",
    authDomain: "testfirebase-5b6c6.firebaseapp.com",
    projectId: "testfirebase-5b6c6",
    storageBucket: "testfirebase-5b6c6.appspot.com",
    messagingSenderId: "259319193638",
    appId: "1:259319193638:web:b962f3ad612c69f8fbc6e7"
    };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


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
