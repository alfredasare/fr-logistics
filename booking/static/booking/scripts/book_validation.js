// variables for data
const name = document.getElementById('name');
const name2 = document.getElementById('name2');
const mail = document.getElementById('mail');
const mail2 = document.getElementById('mail2');
const message = document.getElementById('message');
const contact = document.getElementById('contact');
const contact2 = document.getElementById('contact2');
const from = document.getElementById('from');
const to = document.getElementById('to');
const school = document.getElementById('school');
const hall = document.getElementById('hall');
const name3 = document.getElementById('name3');
const business = document.getElementById('business');
const mail3 = document.getElementById('mail3');
const contact3 = document.getElementById('contact3');
const from3 = document.getElementById('from3');

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

function validateName2() {
    // check if empty
    if (isEmpty(name2)) {
        return false;
    }
    // check if only has letters
    else if (notOnlyLetters(name2)) {
        return false;
    }
    else {
        return true;
    }
}

function validateName3() {
    // check if empty
    if (isEmpty(name3)) {
        return false;
    }
    // check if only has letters
    else if (notOnlyLetters(name3)) {
        return false;
    }
    else {
        return true;
    }
}

function validateBusiness(){
        // check if empty
        if (isEmpty(business)) {
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

function validateMail2() {
    if (isEmpty(mail2)) {
        return false;
    }
    else if (!containsCharacters(mail2, 5)) {
        return false;
    }
    else { return true; }
}

function validateMail3() {
    if (isEmpty(mail3)) {
        return false;
    }
    else if (!containsCharacters(mail3, 5)) {
        return false;
    }
    else { return true; }
}

function validateContact(){
    if (isEmpty(contact)){
        return false;
    }
    if (NotNumber(contact)){
        return false;
    }
    if (falseLength(contact, 10)){
        return false;
    }
    else{
        return true;
    }
}

function validateContact2(){
    if (isEmpty(contact2)){
        return false;
    }
    if (NotNumber(contact2)){
        return false;
    }
    if (falseLength(contact2, 10)){
        return false;
    }
    else{
        return true;
    }
}

function validateContact3(){
    if (isEmpty(contact3)){
        return false;
    }
    if (NotNumber(contact3)){
        return false;
    }
    if (falseLength(contact3, 10)){
        return false;
    }
    else{
        return true;
    }
}

function validateFrom(){
    if (isEmpty(from)) {
        return false;
    }
    else{
        return true;
    }
}

function validateFrom3(){
    if (isEmpty(from3)) {
        return false;
    }
    else{
        return true;
    }
}

function validateTo(){
    if (isEmpty(to)) {
        return false;
    }
    else{
        return true;
    }
}

function validateSchool(){
    if (isEmpty(school)) {
        return false;
    }
    else{
        return true;
    }
}

function validateHall(){
    if (isEmpty(hall)) {
        return false;
    }
    else{
        return true;
    }
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
function NotNumber(field){
    if (isNaN(field.value)){
        setInvalid(field, 'Enter numbers only');
        return true;
    }
    else{
        setValid(field);
        return false;
    }
}
function setValid(field) {
    field.className = "valid";
    field.style.border = "1px solid #14ceac";
    field.nextElementSibling.innerHTML = "";
    field.nextElementSibling.style.marginBottom = "0px";
    field.style.marginBottom = "-19px";
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


function validateDelivery(){
    if (validateName() && validateMail() && validateContact() && validateFrom() && validateTo()){
        return true;
    }
    else {
        return false;
    }
}

function validateSafekeeping(){
    if (validateName2() && validateMail2() && validateContact2() && validateSchool() && validateHall()){
        return true;
    }
    else{
        return false;
    }
}

function validateWarehousing(){
    if (validateName3() && validateBusiness() && validateMail3() && validateContact3() && validateFrom3()){
        return true;
    }
    else{
        return false;
    }
}