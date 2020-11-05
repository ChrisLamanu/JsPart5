document.getElementById("errorMail").style.display = "none";
document.getElementById("errorName").style.display = "none";
document.getElementById("errorAge").style.display = "none";

function updateMail() {
    let mail = document.getElementById("mail");
    // let regexMail = new RegExp(/^[A-Za-z][A-Za-z0-9!@#$%^&*]*$/);
    let regexMail = new RegExp(/^[a-z0-9.-]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,4}$/);

    if (regexMail.test(mail.value)){
        mail.style.borderColor = "green";
        document.getElementById("errorMail").style.display = "none";
    }
    else {
        mail.style.borderColor = "red";
        document.getElementById("errorMail").style.display = "block";
    } 
}
function updateName() {
    let name = document.getElementById("name");
    let regexName = new RegExp(/^[A-Za-z][A-Za-z0-9]*$/);

    if (regexName.test(name.value)){
        name.style.borderColor = "green";
        document.getElementById("errorName").style.display = "none";
    }
    else {
        name.style.borderColor = "red";
        document.getElementById("errorName").style.display = "block";
    } 
}
function updateAge() {
    let age = document.getElementById("age");
    let regexAge = new RegExp(/^[0-9]*$/);

    if (regexAge.test(age.value)){
        age.style.borderColor = "green";
        document.getElementById("errorAge").style.display = "none";
    }
    else {
        age.style.borderColor = "red";
        document.getElementById("errorAge").style.display = "block";
    } 
}