import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseIntialize = () => {
  initializeApp(firebaseConfig);
};

export default firebaseIntialize;
