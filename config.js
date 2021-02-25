import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDkVMcZTBQE_gyGtV1EzDqiVUQ_3msjWKc",
    authDomain: "green-earth-b9965.firebaseapp.com",
    projectId: "green-earth-b9965",
    storageBucket: "green-earth-b9965.appspot.com",
    messagingSenderId: "630562812695",
    appId: "1:630562812695:web:64da30179fa05c1b3cfd52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()