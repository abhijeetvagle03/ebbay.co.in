// Import Firebase modules correctly (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0rJmSmKC6TgzybVXCmRFJj95nSG4dI",
    authDomain: "register-form-c3d75.firebaseapp.com",
    projectId: "register-form-c3d75",
    storageBucket: "register-form-c3d75.appspot.com",
    messagingSenderId: "840548781665",
    appId: "1:840548781665:web:f91a07207421476c63a420",
    measurementId: "G-L21HFLBN69"
};

// Initialize Firebase correctly
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh

    const username = document.getElementById("username").value;
    const email = document.getElementById("email_address").value;
    const password = document.getElementById("password").value;

    set(ref(db, 'users/' + username), {
        username: username,
        email_address: email,
        password: password
    })
    .then(() => {
        alert("Registration successful!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Error: " + error.message);
    });
});
