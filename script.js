document.getElementById('early-access-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops page refresh

    const emailInput = document.getElementById('email-input');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (validateEmail(emailInput.value)) {
        confirmationMessage.classList.remove('hidden');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}