export class ProfileView {
    static displayUser(user) {
        document.getElementById('username').textContent = `@${user.username}`;
        document.getElementById('realname').textContent = `Ім'я: ${user.username}`;
        document.getElementById('email').textContent = user.email;
        document.getElementById('gender').textContent = user.gender === 'male' ? 'Чоловік' : 'Жінка';
        document.getElementById('dob').textContent = user.dob;
    }
    static redirectToLogin() {
        window.location.href = '/WebLAb1/index.html';
    }


}
