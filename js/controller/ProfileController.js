import { ProfileView } from "/WebLAb1/js/view/ProfileView.js";
import { ProfileModel } from "/WebLAb1/js/model/ProfileModel.js";

export class ProfileController {
    static initialize() {
        const user = ProfileModel.getCurrentUser();

        if (!user) {
            alert('Будь ласка, увійдіть у свій обліковий запис.');
            ProfileView.redirectToLogin();
            return;
        }

        ProfileView.displayUser(user);

        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', () => {
            ProfileModel.logout();
            alert('До побачення!');
            ProfileView.redirectToLogin();
        });
    }
}
