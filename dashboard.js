document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.getElementById('usersTable').querySelector('tbody');

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.username}</td>
            <td>
                <button onclick="removeUser(this)">Remove</button>
               
            </td>
            
        `;
        tableBody.appendChild(tr);
    });
});

function removeUser(button) {
    var row = button.closest('tr');
    var username = row.querySelector('td:nth-child(4)').textContent;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.username !== username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    row.remove();
}
