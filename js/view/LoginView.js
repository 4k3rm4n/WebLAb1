export class LoginView {
    static getFormData() {
        return {
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value
        };
    }

    static showAlert(message) {
        alert(message);
    }
}
