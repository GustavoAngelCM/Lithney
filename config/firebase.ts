import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD52d7r91mUCp34Yq5Vb92raDsaatnF7R4",
  authDomain: "lithney-app.firebaseapp.com",
  projectId: "lithney-app",
  storageBucket: "lithney-app.appspot.com",
  messagingSenderId: "1030962351572",
  appId: "1:1030962351572:web:82f790aa0bd813dbc11a41",
  measurementId: "G-9PLPYR3WKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {
  app,
  firestore
}