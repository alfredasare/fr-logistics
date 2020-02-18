// variables for data
const name = document.getElementById('name');
const mail = document.getElementById('mail');
const message = document.getElementById('message');

// Validation colors
const green = '#14ceac';
const red = '#ce2b51';

// MAIN VALIDATORS

// validate firstname
function validateName() {
    // check if empty
    if (isEmpty(name)) {
        return false;
    }
    // check if only has letters
    else if (notOnlyLetters(name)) {
        return false;
    }
    else {
        return true;
    }
}

// validate email
function validateMail() {
    if (isEmpty(mail)) {
        return false;
    }
    else if (!containsCharacters(mail, 5)) {
        return false;
    }
    else { return true; }
}

function validateMessage(){
    if (isEmpty(message)){
        return false;
    }
    else {return true;}
}


// UTILITIES

// empty check function
function isEmpty(field) {
    if (field.value.trim() == "") {
        return (setInvalid(field, 'Please do not leave blank'));
    }
    else {
        return (setValid(field));
    }
}
function notOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        return (setValid(field));
    }
    else {
        return (setInvalid(field, "Please enter letters only"));
    }
}
function setValid(field) {
    field.className = "valid";
    field.style.border = "1px solid #14ceac";
    field.nextElementSibling.innerHTML = "";
    field.nextElementSibling.style.marginBottom = "0px";
    field.style.marginBottom = "19px";
    return false;

}

function setInvalid(field, message) {
    field.className = "invalid";
    field.style.border = "1px solid #ce2b51";
    field.style.marginBottom = "0px";
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    field.nextElementSibling.style.marginBottom = "6px";
    return true;

}
function falseLength(field, num) {
    if (field.value.length < num) {
        return (setInvalid(field, `Must be at least ${num} characters`));
    }
    else {
        return (setValid(field));
    }
}
function containsCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter");
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter and one number");
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter,\
             one upper case letter and one number");
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter,\
            one upper case letter, one number and one special character")
        case 5:
            // for emails
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(field, regEx, "Invalid Email"));
        case 6:
            // check if only numbers
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
            return matchWithRegEx(field, regEx, "Please enter a valid phone number");
        default:
            return false
    }
}
function matchWithRegEx(field, regEx, message) {
    if (field.value.toLowerCase().match(regEx)) {
        return (!setValid(field));
    } else {
        return (!setInvalid(field, message));
    }
}

// validate on submit
function validateContactPage(){
    if (validateName() && validateMail() && validateMessage()){
        return true;
    }
    else {
        return false;
    }
}