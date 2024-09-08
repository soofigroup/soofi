// Show/Hide Password
document.getElementById('show-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    // Simple validation (you can expand this as needed)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "soofi travelogues" && password === "Soofi@2024") {
        // Redirect to a new page if login is successful
        window.location.href = "soofi/LOGIN/register.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
