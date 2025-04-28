export class ProfileModel {
    static getCurrentUser() {
        const userDataJson = localStorage.getItem('user');
        return userDataJson ? JSON.parse(userDataJson) : null;
    }

    static logout() {
        localStorage.removeItem('user');
    }
}
