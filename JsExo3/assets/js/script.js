function updateMail() {
    let mail = document.getElementById("mail");
    let regexMail = new RegExp(/^[A-Za-z][A-Za-z0-9!@#$%^&*]*$/);

    if (regexMail.test(mail.value)){
        mail.style.borderColor = "green";
    }
    else {
        mail.style.borderColor = "red";
    } 
}
function updateName() {
    let name = document.getElementById("name");
    let regexName = new RegExp(/^[A-Za-z][A-Za-z0-9]*$/);

    if (regexName.test(name.value)){
        name.style.borderColor = "green";
    }
    else {
        name.style.borderColor = "red";
    } 
}
function updateAge() {
    let age = document.getElementById("age");
    let regexAge = new RegExp(/^[0-9]*$/);

    if (regexAge.test(age.value)){
        age.style.borderColor = "green";
    }
    else {
        age.style.borderColor = "red";
    } 
}