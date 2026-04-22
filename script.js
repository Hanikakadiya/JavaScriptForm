const form = document.getElementById('Registration-form');

form.addEventListener("submit", function(event) {
    // Stop the form from refreshing the page
    event.preventDefault();  
    
    // 1. Get the error boxes
    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const passErr = document.getElementById("passErr");
    const confirmErr = document.getElementById("confirmErr");

    // 2. Clear old errors
    nameErr.textContent = "";
    emailErr.textContent = "";
    passErr.textContent = "";
    confirmErr.textContent = "";

    // 3. Get the input values
    const username = document.getElementById("UName-text").value.trim();
    const email = document.getElementById("Email-id").value.trim();
    const password = document.getElementById("pwd-id").value;
    const confirmPassword = document.getElementById("cpwd-id").value;

    // 4. Validation Flag
    let isValid = true;

    // 5. Check the Rules
    if (username === "") {
        nameErr.textContent = "Please enter username!";
        isValid = false; 
    }
    
    if (!email.includes("@")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.length < 8) {
        passErr.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    if (password !== confirmPassword || confirmPassword === "") {
        confirmErr.textContent = "Your passwords do not match!";
        isValid = false;     
    }

    // 6. SUCCESS & REDIRECT (Safely locked inside this block!)
    if (isValid === true) {
        // Save the user data to the browser
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);

        alert("Registration Successful! Redirecting to Login...");
        
        // Safely redirect to the login page
        window.location.href = "login.html"; 
    }
});
