document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        username: document.getElementById('username').value
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    window.location.href = 'dashboard.html'; 
});
