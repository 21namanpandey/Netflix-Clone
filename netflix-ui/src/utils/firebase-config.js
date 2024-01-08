import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgkPCZGIc_ZbyNE26hChKyuAB-2E3C5DA",
    authDomain: "react-netflix-clone-8da7a.firebaseapp.com",
    projectId: "react-netflix-clone-8da7a",
    storageBucket: "react-netflix-clone-8da7a.appspot.com",
    messagingSenderId: "163594173445",
    appId: "1:163594173445:web:56de1e0e2f7c453a99306c",
    measurementId: "G-X0M26HHZZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);