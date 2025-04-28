import { LoginModel } from "/WebLAb1/js/model/LoginModel.js";
import { LoginView } from "/WebLAb1/js/view/LoginView.js";

export class LoginController {
    static initialize() {
        const loginForm = document.querySelector('form');
        loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }

    static handleLogin(event) {
        event.preventDefault();

        const formData = LoginView.getFormData();
        const validationMessage = this.validateFormData(formData);

        if (validationMessage) {
            LoginView.showAlert(validationMessage);
            return;
        }

        const user = LoginModel.findUser(formData.email, formData.password);

        if (!user) {
            LoginView.showAlert('Невірна електронна пошта або пароль.');
            return;
        }

        LoginModel.setCurrentUser(user);
        LoginView.showAlert('Вхід виконано успішно!');

        setTimeout(() => {
            window.location.href = '/WebLAb1/Pages/profile.html';
        }, 1000);
    }

    static validateFormData(data) {
        if (!data.email) {
            return "Будь ласка, введіть електронну пошту.";
        }

        if (!data.password) {
            return "Будь ласка, введіть пароль.";
        }

        return null;
    }
}
