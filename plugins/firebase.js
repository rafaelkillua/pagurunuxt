import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAxxMhQfdXZ0rGmBe6GrUcS55m4_7aqj0E",
    authDomain: "paguru-nuxtjs.firebaseapp.com",
    databaseURL: "https://paguru-nuxtjs.firebaseio.com",
    projectId: "paguru-nuxtjs",
    storageBucket: "paguru-nuxtjs.appspot.com",
    messagingSenderId: "303499191890"
};

if (!firebase.apps.length) firebase.initializeApp(config);

export const database = firebase.database();
