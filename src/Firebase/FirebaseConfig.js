// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnQlLE5_StKso4zFI2JO8ddPalcmkzeJU",
  authDomain: "fir-auth-tailwind-dasiyui.firebaseapp.com",
  projectId: "fir-auth-tailwind-dasiyui",
  storageBucket: "fir-auth-tailwind-dasiyui.appspot.com",
  messagingSenderId: "1073762146660",
  appId: "1:1073762146660:web:fec533c7459bf2c6d84271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app