export class RegisterView {
    static getFormData() {
        return {
            username: document.getElementById('username').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value,
            gender: document.getElementById('gender').value,
            dob: document.getElementById('dob').value
        };
    }

    static showAlert(message) {
        alert(message);
    }
}
