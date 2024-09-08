document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const errorMessage = document.getElementById('register-error-message');

    // Retrieve stored users
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    if (users.some(user => user.username === newUsername)) {
        errorMessage.textContent = 'Username already exists. Please choose a different one.';
        return;
    }

    // Save new user
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    window.location.href = 'Login.html';
});
