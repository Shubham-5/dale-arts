import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE3l2MVX-LSh8e6xhfvGpfYRrZcQ8QOx0",
  authDomain: "dale-arts-2f06e.firebaseapp.com",
  projectId: "dale-arts-2f06e",
  storageBucket: "dale-arts-2f06e.firebasestorage.app",
  messagingSenderId: "520356888899",
  appId: "1:520356888899:web:86e8ac9b1154cab99a2ff6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
