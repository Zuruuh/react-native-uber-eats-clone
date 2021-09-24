import firebase from "firebase";

import { firebaseConfig } from "./firebase.json";

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

export { db, auth };
