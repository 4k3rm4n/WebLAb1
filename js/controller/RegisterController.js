import { RegisterModel } from "/WebLAb1/js/model/RegisterModel.js";
import { RegisterView } from "/WebLAb1/js/view/RegisterView.js";

export class RegisterController {
    static initialize() {
        const registerForm = document.querySelector('form');
        registerForm.addEventListener('submit', this.handleRegister.bind(this));
    }

    static handleRegister(event) {
        event.preventDefault();

        const formData = RegisterView.getFormData();
        const validationMessage = this.validateFormData(formData);

        if (validationMessage) {
            RegisterView.showAlert(validationMessage);
            return;
        }

        if (RegisterModel.userExists(formData.username, formData.email)) {
            RegisterView.showAlert('Користувач з таким іменем або електронною поштою вже існує!');
            return;
        }

        const userData = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            gender: formData.gender,
            dob: formData.dob
        };

        RegisterModel.saveUser(userData);
        RegisterView.showAlert('Реєстрація пройшла успішно!');

        setTimeout(() => {
            window.location.href = '/WebLAb1/index.html';
        }, 1000);
    }

    static validateFormData(data) {
        if (!data.username || data.username.length < 3) {
            return "Ім'я користувача має бути не менше 3 символів.";
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            return "Введіть коректну електронну пошту.";
        }

        if (!data.password || data.password.length < 6) {
            return "Пароль має містити щонайменше 6 символів.";
        }

        if (data.password !== data.confirmPassword) {
            return "Паролі не співпадають.";
        }

        if (!data.gender) {
            return "Будь ласка, виберіть стать.";
        }

        if (!data.dob) {
            return "Будь ласка, введіть дату народження.";
        }

        return null;
    }

    static isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
}
