document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Retrieve stored users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validate credentials
    if (users.some(user => user.username === username && user.password === password)) {
        // Store login state
        localStorage.setItem('loggedIn', 'true');
        // Redirect to the dashboard
        window.location.href = 'Dashboard/dashboard.html';
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
