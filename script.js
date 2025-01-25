document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', () => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

    isValid = true;

    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("username too short.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        isValid = false; 
        messages.push("invalid email.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("password must be a minimum of 8 characters.")
    }

    feedbackDiv.style.display = "block";

    if(isValid === true){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        
        feedbackDiv.innerHTML = messages.join("<br/>");
        feedbackDiv.style.color = "#dc3545";
    }

    })

})