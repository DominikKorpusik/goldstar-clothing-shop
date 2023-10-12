import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAhgOGgwzoD_g7Po5osfcO86JWnpNOo1c",
  authDomain: "goldstar-db.firebaseapp.com",
  projectId: "goldstar-db",
  storageBucket: "goldstar-db.appspot.com",
  messagingSenderId: "460967701660",
  appId: "1:460967701660:web:0e12e443f88e2c5f961159",
  measurementId: "G-762163XQ3R",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
