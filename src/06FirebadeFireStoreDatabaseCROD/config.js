import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzBozD8F4RTo-9mL0F1iKCYy4thlbg2SE",
  authDomain: "demoapp-eba90.firebaseapp.com",
  projectId: "demoapp-eba90",
  storageBucket: "demoapp-eba90.appspot.com",
  messagingSenderId: "458647144911",
  appId: "1:458647144911:web:20384d2c872fd2be6e6aba",
  measurementId: "G-YD07Z045G7",
  databaseURL:
    "https://demoapp-eba90-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export default app;
