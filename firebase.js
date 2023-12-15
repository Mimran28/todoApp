  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {getFirestore,doc,updateDoc  ,getDocs,addDoc,collection,setDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
  const firebaseConfig = {
    apiKey: "AIzaSyCVLnt_OiskQgK2X4liLCmPacdAF3JBSJ8",
    authDomain: "challenge-45d2e.firebaseapp.com",
    databaseURL: "https://challenge-45d2e-default-rtdb.firebaseio.com",
    projectId: "challenge-45d2e",
    storageBucket: "challenge-45d2e.appspot.com",
    messagingSenderId: "372912950307",
    appId: "1:372912950307:web:bb87f86e2983b8ff6b7596",
    measurementId: "G-VM9449HLJC"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {
    db,
    collection,addDoc,
    setDoc,
    doc,
    deleteDoc,
    getDocs,
    updateDoc 
  }