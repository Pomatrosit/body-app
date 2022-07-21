import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDrpgcGGNKaDeXC_yA5i2q0sidVMOL3vek",
  authDomain: "body-app-e6670.firebaseapp.com",
  projectId: "body-app-e6670",
  storageBucket: "body-app-e6670.appspot.com",
  messagingSenderId: "193776403353",
  appId: "1:193776403353:web:40159babd6456fbe824908",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(firebaseApp);
