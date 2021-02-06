import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

// utils
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
}

// const auth = firebase.auth();

// collection references
const productsCollection = db.collection('products');

// export utils/refs
export { db, productsCollection };
