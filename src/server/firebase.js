// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc } from 'firebase/firestore';
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

export async function joinGame(code, name) {
  const userId = getIdRandom();
  const db = getFirestore();
  await setDoc(doc(db, 'game', code, 'users', userId), {
    name,
    score: 0,
    id: userId,
  });
  return userId;
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

export async function putCurrentPage(code, page, question = {}, index = 0) {
  const db = getFirestore();

  await setDoc(doc(db, 'game', code, 'currentPage', 'currentPageId'), {
    id: page,
    currentQuestion: question,
    indexQuestion: index,
  });
}

export async function getQuizzes() {
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
  const db = getFirestore();
  let quiz = null;

  const docRef = doc(db, 'quizzes', guid);
  const docSnap = await getDoc(docRef);
  console.log(docSnap, 'docSnap');
  if (docSnap.exists()) {
    quiz = docSnap.data();
  }
  return quiz;
}

export async function getGame(code) {
  const db = getFirestore();
  let game = null;

  const docRef = doc(db, 'game', code);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    game = docSnap.data();
  }
  return game;
}

// subscribirte a la pagina actual
export async function getCurrentPage(code, subscription) {
  const db = getFirestore();
  const unsub = onSnapshot(doc(db, 'game', code, 'currentPage', 'currentPageId'), (doc) => {
    console.log('Current data: ', doc.data());
    subscription(doc.data());
  });
}

// subscribirte a tu usuario actual
export async function getCurrentUser(code, idUser, subscription) {
  const db = getFirestore();
  const unsub = onSnapshot(doc(db, 'game', code, 'users', idUser), (doc) => {
    subscription(doc.data());
  });
}

export async function getOnceCurrentPage(code, subscription) {
  const db = getFirestore();
  let currentPage = null;
  const docRef = doc(db, 'game', code, 'currentPage', 'currentPageId');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    currentPage = docSnap.data();
  }
  console.log(currentPage, 'currentPagecurrentPagecurrentPagecurrentPage');
  return currentPage;
}

export async function getGameUsers(code) {
  const db = getFirestore();
  const q = query(collection(db, 'game', code, 'users'));

  let users = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users;
}

export async function getUserAnswerForActualQuestion(code, questionId) {
  const db = getFirestore();
  const q = query(collection(db, 'game', code, 'answers'));

  let answers = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    answers.push(doc.data());
  });

  answers = answers.filter((answer) => answer.questionId === questionId);

  return answers;
}

export async function addAnswer(code, answer) {
  const db = getFirestore();

  await setDoc(doc(db, 'game', code, 'answers', getIdRandom()), answer);
}

export async function updateTotalUserScore(code, userId, userName, totalScore) {
  const db = getFirestore();

  await setDoc(doc(db, 'game', code, 'users', userId), { name: userName, score: totalScore, id: userId });
}

function getIdRandom() {
  return new Date().getTime().toString() + '-' + getRandom();
}

function getRandom(max = 999999, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}
