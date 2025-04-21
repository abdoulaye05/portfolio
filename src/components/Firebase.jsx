// Importez les fonctions nécessaires de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGXghf8d0V6hZCN74zLOob7GiyBGJDJVE",
  authDomain: "portfolio-b16b6.firebaseapp.com",
  projectId: "portfolio-b16b6",
  storageBucket: "portfolio-b16b6.appspot.com",
  messagingSenderId: "514762107786",
  appId: "1:514762107786:web:a8285533b27d639e1fb673"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore
const db = getFirestore(app);

export { db, collection, addDoc };
