import { initializeApp } from 'firebase/app';
import {
   getAuth,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   createUserWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyA1ItgsbVrDwuDtx24oYERMDWUIxVsTcuE',
   authDomain: 'bookshelf-1997.firebaseapp.com',
   projectId: 'bookshelf-1997',
   storageBucket: 'bookshelf-1997.appspot.com',
   messagingSenderId: '71569784379',
   appId: '1:71569784379:web:c418fa4c678dc85502661e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// sign in with email and password
export async function signInUserWithEmail(email, password) {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
}

// sign in with google
export async function signInUserWithGooglePopup() {
   return await signInWithPopup(auth, provider);
}

// sign up with email and password
export async function registerUserWithEmail(email, password) {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
}

// Sign out
export async function signOutUser() {
   await signOut(auth);
}

// On Authentication change (sign in and out) - invokes a callback function
export const onAuthStateChangedListner = callback => onAuthStateChanged(auth, callback);
