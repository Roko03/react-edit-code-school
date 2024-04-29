import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAH81yXfApZEaBCABifjm-TCUL-zT82aIo",
    authDomain: "edit-code-school-image.firebaseapp.com",
    projectId: "edit-code-school-image",
    storageBucket: "edit-code-school-image.appspot.com",
    messagingSenderId: "168325460376",
    appId: "1:168325460376:web:fe91f5f53673a88e0e3bed"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)