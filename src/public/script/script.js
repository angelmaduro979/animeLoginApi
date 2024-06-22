document.addEventListener('DOMContentLoaded', () => {
    //-----Login----------
    let emailInput = document.querySelector('.inputClass #email')
    let passwordInput = document.querySelector('.inputClass .passwordContainer #password');
    let passwordToggleButton = document.querySelector('.inputClass .passwordContainer #toggleButton');
    //button LogIn
    let buttonContainer = document.querySelector('.buttonContainer #buttonLogInCrunchy')
    function toggleFunction() {
        if (passwordInput.value) {
            passwordToggleButton.classList.remove('hidden');
            passwordToggleButton.classList.add('showed')
        } else {
            passwordToggleButton.classList.remove('showed');
            passwordToggleButton.classList.add('hidden')
        }
    }

    function toggleLoginButton() {
        if (emailInput.value && passwordInput.value) {
            buttonContainer.classList.add('buttonLogInOn')
            buttonContainer.classList.remove('buttonLogInOff')
        } else {
            buttonContainer.classList.add('buttonLogInOff');
            buttonContainer.classList.remove('buttonLogInOn')
        }
    }

    passwordInput.addEventListener('focus', () => {
        toggleFunction();
        toggleLoginButton()
    });
    passwordInput.addEventListener('input', () => {
        toggleFunction();
        toggleLoginButton();
    });
    passwordInput.addEventListener('blur', () => {
        setTimeout(toggleFunction, 200);
    })

    passwordToggleButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggleButton.textContent = 'HIDE';
        } else {
            passwordInput.type = 'password';
            passwordToggleButton.textContent = 'SHOW'
        }
    })

    emailInput.addEventListener('input', toggleLoginButton)



})
