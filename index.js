const email = document.querySelector("#email");
const country = document.querySelector("#country");
const password = document.querySelector("#password");
const password_confirm = document.querySelector("#password-confirm");

email.addEventListener("input", (e) => {
    showError();
    
})

password.addEventListener("input", () => {
    validatePassword();
     
})

password_confirm.addEventListener("input", ()=> {
    confirmPassword();
})

console.log(password.willValidate)
function showError () {
    const emailSpan = document.querySelector("#email-validate");

    if (!email.validity.valid) {
        emailSpan.textContent = "Email Expected"
    } else if (email.validity.valid) {
        emailSpan.textContent = "";
        
    }

   

}

function validatePassword () {
    const passwordSpan = document.querySelector("#password-validate");
     if (!password.validity.valid) {
        passwordSpan.textContent = "Minimum of 8 characters";
    }
    else if (password.validity.valid) {
        passwordSpan.textContent = "";
        
    }
}

function confirmPassword () {
    const confirmPasswordSpan = document.querySelector("#password-confirm-validate");
    const firstPassword = password.value;
    if (password_confirm.value != firstPassword) {
        confirmPasswordSpan.textContent = "passwords don't match"
    } else if (password_confirm.value === firstPassword) {
        confirmPasswordSpan.textContent = "";
        
    }
}