export class LoginModel {
    static getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    static findUser(email, password) {
        const users = this.getUsers();
        return users.find(user => user.email === email && user.password === password);
    }

    static setCurrentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}
