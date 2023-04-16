import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrpgcGGNKaDeXC_yA5i2q0sidVMOL3vek",
  authDomain: "body-app-e6670.firebaseapp.com",
  databaseURL:
    "https://body-app-e6670-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "body-app-e6670",
  storageBucket: "body-app-e6670.appspot.com",
  messagingSenderId: "193776403353",
  appId: "1:193776403353:web:40159babd6456fbe824908",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
