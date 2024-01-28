import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCS0kBDsjEFH5MBjC4pL55vo305MK5vIWs",
  authDomain: "elk-dashboard-f6454.firebaseapp.com",
  projectId: "elk-dashboard-f6454",
  storageBucket: "elk-dashboard-f6454.appspot.com",
  messagingSenderId: "386017966848",
  appId: "1:386017966848:web:4c0b4d347b2a14242611e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");

  if (menuicn && nav) {
    menuicn.addEventListener("click", () => {
      nav.classList.toggle("navclose");
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
