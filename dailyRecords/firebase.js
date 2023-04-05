import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCO0PNWtRiOcfQgAGzokiRRr-QulK0fIE0",
    authDomain: "dailyrecords-a571e.firebaseapp.com",
    projectId: "dailyrecords-a571e",
    storageBucket: "dailyrecords-a571e.appspot.com",
    messagingSenderId: "926881400362",
    appId: "1:926881400362:web:263d9970a6c7b96ecaa553"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase


