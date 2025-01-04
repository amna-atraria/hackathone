// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18hvWmvf7Ietz1BYlO8Yxt7QsaE_maWM",
  authDomain: "hackathone-30829.firebaseapp.com",
  projectId: "hackathone-30829",
  storageBucket: "hackathone-30829.firebasestorage.app",
  messagingSenderId: "112076257770",
  appId: "1:112076257770:web:7c8babb6b7aa1fcfee5a93",
  measurementId: "G-TBVGC29KRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Correct Firestore initialization

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const consent = document.querySelector('input[name="consent"]').checked;


    if (!name || !email || !message || !consent) {
        alert("Please fill out all fields and provide consent.");
        return;
    }

    
    addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        consent: consent,
        timestamp: serverTimestamp()
    })
    .then(() => {
        alert("Message sent successfully!");
        document.querySelector("form").reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("There was an error sending your message. Please try again.");
    });
}
