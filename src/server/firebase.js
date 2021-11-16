// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  setDoc,
  getFirestore,
  query,
  collection,
  onSnapshot,
  getDoc,
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

let unsubscribeUsers = [];

export function initServer() {
  initializeApp(firebaseConfig);

  // setTimeout((item) => {
  //   // getCurrentPage("Este es el codigo", subscribe);
  //   joinGame("Este es el codigo2", "lolo");
  // }, 2000);
}

function subscribe(data) {
  console.log("data", data);
}

export async function createGame(code) {
  const db = getFirestore();

  await setDoc(doc(db, "game", code.toString()), {
    currentPage: "waiting-game",
  });
}

export async function getGame(code) {
  const db = getFirestore();
  let game = null;

  const docRef = doc(db, "game", code);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    game = docSnap.data();
  }
  console.log(game, "gamegamegame");
  return game;
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

// subscribirte a los jugadores
export async function getUsersInGame(code, subscription) {
  const db = getFirestore();

  const q = query(collection(db, "game", code, "users"));
  unsubscribeUsers = onSnapshot(q, (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    subscription(users);
  });
}

// subscribirte a la pagina actual
// export async function getCurrentPage(code, subscription) {
//   const db = getFirestore();

//   const q = query(collection(db, "game", code, "currentPage"));
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     console.log(snapshot.data());
//   });
// }
