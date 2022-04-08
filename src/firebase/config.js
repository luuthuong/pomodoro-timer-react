import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { 
        getFirestore, 
    } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCVx0RTcH3Gif0uij0H4KzRO0SvnCMqwro",
    authDomain: "pomodoro-timer4u.firebaseapp.com",
    projectId: "pomodoro-timer4u",
    storageBucket: "pomodoro-timer4u.appspot.com",
    messagingSenderId: "724086816664",
    appId: "1:724086816664:web:31f425619328ceeecf75ed",
    measurementId: "G-FM755YX6E1"
};

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db=getFirestore(app)

const firebase = {
    app,
    analytics,
    db
}
export default firebase