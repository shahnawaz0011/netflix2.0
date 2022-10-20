import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtUfIibi2WaSD4L7KBXUHK8OmyGysmch4",
    authDomain: "netflix-clone-be791.firebaseapp.com",
    projectId: "netflix-clone-be791",
    storageBucket: "netflix-clone-be791.appspot.com",
    messagingSenderId: "265007730702",
    appId: "1:265007730702:web:991240b04cc9e661512c5f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;