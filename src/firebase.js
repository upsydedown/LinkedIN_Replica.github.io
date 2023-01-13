import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDALta-xDVN1krrnoQYEdOtwl-gYVQUBV0",
    authDomain: "linkedin-replica-16.firebaseapp.com",
    projectId: "linkedin-replica-16",
    storageBucket: "linkedin-replica-16.appspot.com",
    messagingSenderId: "344937804260",
    appId: "1:344937804260:web:c847965d1dbac2aacb57f1",
    measurementId: "G-ZT2BQS79B0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};