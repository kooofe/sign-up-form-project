const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const output = document.querySelector('#password-incorrect');
const submitBtn = document.querySelector('.create-btn');
const formInputs = document.querySelectorAll('.form-item input');

function checkFormCompletion() {
    let allFilled = true;
    formInputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });
    submitBtn.disabled = !allFilled;
}

formInputs.forEach(input => {
    input.addEventListener('input', checkFormCompletion);
});

passwordConfirm.addEventListener('input', () => {
    if (password.value === passwordConfirm.value && passwordConfirm.value !== '') {
        output.textContent = ''; // Clear error message
    } else {
        output.textContent = 'Passwords do not match';
        submitBtn.disabled = true; // Disable submit button if passwords don't match or passwordConfirm is empty
    }
});

checkFormCompletion();
