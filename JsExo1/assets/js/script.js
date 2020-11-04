
function setPwd() {
    let pwd_a = document.getElementById("pwd_a");
    let pwd_b = document.getElementById("pwd_b");

    if (pwd_a.value == pwd_b.value){
        pwd_a.style.borderColor = "green";
        pwd_b.style.borderColor = "green";

        window.alert("Mot de passe changé avec succès !");
    }
    else {
        pwd_a.style.borderColor = "red";
        pwd_b.style.borderColor = "red";

        window.alert("Vous devez entrer des mots de passe similaire !");
    }
}
