import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCh40fPyWrxx7iP5dckPYf-7zPbYBuPdns",
  authDomain: "dhc-property.firebaseapp.com",
  databaseURL: "https://dhc-property-default-rtdb.firebaseio.com",
  projectId: "dhc-property",
  storageBucket: "dhc-property.appspot.com",
  messagingSenderId: "402408474019",
  appId: "1:402408474019:web:14eed219ff04ea0a134616",
  measurementId: "G-2CSQD2DGPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
