const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    // const mail = event.currentTarget.email.value;
    // const agree = event.currentTarget.agree.checked;
    if (name.includes('chad')) {
        alert('Sorry bro');
        event.preventDefault();
        
    }



});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);