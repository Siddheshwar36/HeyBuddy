import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 


const firebaseConfig = {
    apiKey: "AIzaSyBUUyHsQzUiRaqYoxXm5Aqnf1Yvp7vYt9g",
    authDomain: "heybuddy-210db.firebaseapp.com",
    projectId: "heybuddy-210db",
    storageBucket: "heybuddy-210db.appspot.com",
    messagingSenderId: "1052263454900",
    appId: "1:1052263454900:web:e3cf26fad8b2d8bd415fe1",
    measurementId: "G-GSGF4PT5VM"
  };

  const app = initializeApp(firebaseConfig);
  export const  firebaseAuth = getAuth(app);
  