// Elements
const minChars = document.getElementById("8characters");
const specialChars = document.getElementById("special-characters");
const capitalLetter = document.getElementById("capital-letter");
const digit = document.getElementById("digit");
const eyeIcon = document.getElementById("eye1");

const password = document.getElementById("new-password");
password.addEventListener("input", checkPassword);
const passwdConfirm = document.getElementById("new-password-confirm")
passwdConfirm.addEventListener("keypress", (event) => {
    if(event.key === "Enter") passwordsEqual();
})

eyeIcon.addEventListener("click", togglePasswordVisibility);
const eyeIconRepeat = document.getElementById("eye2");
eyeIconRepeat.addEventListener("click", toggleConfirmVisibility);

const passwInput = document.getElementById("new-password");
const passwConfirmInput = document.getElementById("new-password-confirm");

let okPasswordFlag = false;
// Logic
const regSpecialCharacter = /[^\w\s]/;
const regCapital = /[A-Z]/;
const regDigit = /[0-9]/;
function checkPassword(){
    let passwd = password.value;
    okPasswordFlag = true;
    if(passwd.length >= 8) minChars.classList = "fa-solid fa-circle-check";
    else {
        minChars.classList = "fa-sharp fa-solid fa-circle-xmark";
        okPasswordFlag = false;
    }

    if(regSpecialCharacter.test(passwd)) 
        specialChars.classList = "fa-solid fa-circle-check";
    else {
        specialChars.classList = "fa-sharp fa-solid fa-circle-xmark";
        okPasswordFlag = false;
    }

    if(regCapital.test(passwd)) 
        capitalLetter.classList = "fa-solid fa-circle-check";
    else {
        capitalLetter.classList = "fa-sharp fa-solid fa-circle-xmark";
        okPasswordFlag = false;
    }

    if(regDigit.test(passwd)) 
        digit.classList = "fa-solid fa-circle-check";
    else {
        digit.classList = "fa-sharp fa-solid fa-circle-xmark";
        okPasswordFlag = false;
    }
};

function passwordsEqual(){
    let password = passwInput.value;
    let passwordConfirm = passwConfirmInput.value;
    if(password != passwordConfirm || !okPasswordFlag){
        alert("Failed!");
    }
    else{
        alert("Success!")
    }
}

function togglePasswordVisibility(){
    if (password.type == "text") {
        password.type = "password";
        eyeIcon.classList = "fa-regular fa-eye"
    }
    else {
        password.type = "text";
        eyeIcon.classList = "fa-regular fa-eye-slash";
    }
}

function toggleConfirmVisibility(){
    if (passwdConfirm.type == "text") {
        passwdConfirm.type = "password";
        eyeIconRepeat.classList = "fa-regular fa-eye"
    }
    else {
        passwdConfirm.type = "text";
        eyeIconRepeat.classList = "fa-regular fa-eye-slash";
    }
}