export class RegisterModel {
    
    static getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    static saveUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users)); 
        localStorage.setItem('user', JSON.stringify(user));
    }

    static userExists(username, email) {
        const users = this.getUsers();
        return users.some(user => user.username === username || user.email === email);
    }
}
