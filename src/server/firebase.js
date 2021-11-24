// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc } from 'firebase/firestore';
import { quizzesMock } from '../mocks/quizzes';
import { PAGES } from '../utils/constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZzBPkgnpBBOcpdKS_HqpMC3pb751zDvY',
  authDomain: 'cherry-65c66.firebaseapp.com',
  projectId: 'cherry-65c66',
  storageBucket: 'cherry-65c66.appspot.com',
  messagingSenderId: '405401497451',
  appId: '1:405401497451:web:814a97abff6fd191b4662e',
};

let unsubscribeUsers = [];

export function initServer() {
  const init = initializeApp(firebaseConfig);
  // setTimeout((item) => {
  //   // getCurrentPage("Este es el codigo", subscribe);
  //   joinGame("Este es el codigo2", "lolo");
  // }, 2000);
}

function subscribe(data) {
  console.log('data', data);
}

export async function createGame(code, quiz) {
  const db = getFirestore();
  await setDoc(doc(db, 'game', code.toString()), {
    createdAt: new Date().getTime().toString(),
    quiz: {
      guid: quiz.guid,
      name: quiz.name,
      description: quiz.description,
    },
  });

  await setDoc(doc(db, 'game', code.toString(), 'currentPage', 'currentPageId'), {
    id: PAGES.waitingGame,
    currentQuestion: null,
  });
}

export async function getGame(code) {
  const db = getFirestore();
  let game = null;

  const docRef = doc(db, 'game', code);
  const docSnap = await getDoc(docRef);
  console.log(docSnap, 'docSnap');
  if (docSnap.exists()) {
    game = docSnap.data();
  }
  return game;
}

export async function joinGame(code, name) {
  const db = getFirestore();

  await setDoc(doc(db, 'game', code, 'users', new Date().getTime().toString()), {
    name,
  });
}

// subscribirte a los jugadores
export async function getUsersInGame(code, subscription) {
  const db = getFirestore();

  const q = query(collection(db, 'game', code, 'users'));
  unsubscribeUsers = onSnapshot(q, (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    subscription(users);
  });
}

export async function putCurrentPage(code, page, question = {}) {
  const db = getFirestore();

  await setDoc(doc(db, 'game', code, 'currentPage', 'currentPageId'), {
    id: page,
    currentQuestion: question,
  });
}

export async function getQuizzes(subscription) {
  const db = getFirestore();
  const q = query(collection(db, 'quizzes'));

  let quizzes = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    quizzes.push(doc.data());
  });

  return quizzes;
}

export async function getQuiz(guid) {
  const quiz = quizzesMock.filter((quiz) => quiz.guid === guid);

  return quiz && quiz.length > 0 ? quiz[0] : {};
}

// subscribirte a la pagina actual
export async function getCurrentPage(code, subscription) {
  console.log(code, 'codecode');
  const db = getFirestore();
  const unsub = onSnapshot(doc(db, 'game', code, 'currentPage', 'currentPageId'), (doc) => {
    console.log('Current data: ', doc.data());
    subscription(doc.data());
  });
}
