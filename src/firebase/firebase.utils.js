import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkF_4lDzhbetZ2T1BvBVRu-TRgPOWsMx8",
  authDomain: "mealstogo-97791.firebaseapp.com",
  projectId: "mealstogo-97791",
  storageBucket: "mealstogo-97791.appspot.com",
  messagingSenderId: "22808473735",
  appId: "1:22808473735:web:f1989063bfa6ba54910822",
};

export const firebase =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
