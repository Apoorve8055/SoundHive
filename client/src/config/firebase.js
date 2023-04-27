import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSASGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "../env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSASGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
