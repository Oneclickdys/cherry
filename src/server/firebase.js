// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  getFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZzBPkgnpBBOcpdKS_HqpMC3pb751zDvY",
  authDomain: "cherry-65c66.firebaseapp.com",
  projectId: "cherry-65c66",
  storageBucket: "cherry-65c66.appspot.com",
  messagingSenderId: "405401497451",
  appId: "1:405401497451:web:814a97abff6fd191b4662e",
};

export function initServer() {
  initializeApp(firebaseConfig);

  setTimeout((item) => {
    joinGame("Este es el codigo", "jany");
  }, 2000);
}

export async function joinGame(code, name) {
  const db = getFirestore();

  await setDoc(
    doc(db, "game", code, "users", new Date().getTime().toString()),
    {
      name,
    }
  );
}
