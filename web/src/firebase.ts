import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { productConverter } from './models/product.model';

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
const auth = firebase.auth();

if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
  auth.useEmulator('http://localhost:9099');
}

// collection references
const productsCollection = db.collection('products').withConverter(productConverter);

// export utils/refs
export { auth, db, productsCollection };
