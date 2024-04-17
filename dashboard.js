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
            <td>
                 <button onclick="editUser(this)">Update</button>
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

function editUser(button) {
    var row = button.closest('tr');
    var username = row.querySelector('td:nth-child(4)').textContent;
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.username === username);

    document.getElementById('fullName').value = user.fullName;
    document.getElementById('email').value = user.email;
    document.getElementById('mobile').value = user.mobile;
    document.getElementById('username').value = user.username;

    document.getElementById('editModal').style.display = 'block';

    document.getElementById('editForm').onsubmit = function(event) {
        event.preventDefault();

        user.fullName = document.getElementById('fullName').value;
        user.email = document.getElementById('email').value;
        user.mobile = document.getElementById('mobile').value;

        localStorage.setItem('users', JSON.stringify(users));
        row.querySelector('td:nth-child(1)').textContent = user.fullName;
        row.querySelector('td:nth-child(2)').textContent = user.email;
        row.querySelector('td:nth-child(3)').textContent = user.mobile;

        document.getElementById('editModal').style.display = 'none';
    };
}

document.querySelector('.close').onclick = function() {
    document.getElementById('editModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('editModal')) {
        document.getElementById('editModal').style.display = 'none';
    }
};
