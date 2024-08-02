import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyjfyyRS3vNqg8zd93ux6rKdE7ZeqLqLo",
  authDomain: "vue-crud-97a6e.firebaseapp.com",
  projectId: "vue-crud-97a6e",
  storageBucket: "vue-crud-97a6e.appspot.com",
  messagingSenderId: "705448281967",
  appId: "1:705448281967:web:74e319d628b95102390a9a",
  measurementId: "G-RRJL1HBP6M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
