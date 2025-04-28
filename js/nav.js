document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const registerLink = document.querySelector('a[href="/WebLAb1/Pages/register.html"]');
    const loginLink = document.querySelector('a[href="/WebLAb1/Pages/login.html"]');
    const profileLink = document.querySelector('a[href="/WebLAb1/Pages/profile.html"]');

    function showAlert(message) {
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        const alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert alert alert-warning text-center';
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '20px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
        alertDiv.style.zIndex = '9999';
        alertDiv.style.width = '300px';
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }

    if (user) {
        if (registerLink) {
            registerLink.addEventListener('click', (event) => {
                event.preventDefault();
                showAlert('Ви вже увійшли в акаунт!');
            });
        }
        if (loginLink) {
            loginLink.addEventListener('click', (event) => {
                event.preventDefault();
                showAlert('Ви вже увійшли в акаунт!');
            });
        }
    } else {
        if (profileLink) {
            profileLink.addEventListener('click', (event) => {
                event.preventDefault();
                showAlert('Будь ласка, увійдіть в акаунт!');
                setTimeout(() => {
                    window.location.href = '/WebLAb1/Pages/login.html';
                }, 1500);
            });
        }
    }
});
