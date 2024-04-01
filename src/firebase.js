import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "E"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);
