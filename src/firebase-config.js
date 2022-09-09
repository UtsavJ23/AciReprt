import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhc2mR9EMJ_AO6U9w0Bb0qEfNCgfuK924",
  authDomain: "hackathon-bc5a6.firebaseapp.com",
  projectId: "hackathon-bc5a6",
  storageBucket: "hackathon-bc5a6.appspot.com",
  messagingSenderId: "15190036453",
  appId: "1:15190036453:web:b74ceec2689200a583e90c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;