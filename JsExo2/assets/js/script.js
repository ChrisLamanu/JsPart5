
function setPwd() {
    let pwd_a = document.getElementById("pwd_a");
    let pwd_b = document.getElementById("pwd_b");
    
    pwd_a.classList.add("b_red", "b_green");
    pwd_b.classList.add("b_red", "b_green");

    if (pwd_a.value == pwd_b.value){
        pwd_a.classList.replace("b_red", "b_green");
        pwd_b.classList.replace("b_red", "b_green");

        window.alert("Mot de passe changé avec succès !");
    }
    else {
        pwd_a.classList.replace("b_green", "b_red");
        pwd_b.classList.replace("b_green", "b_red");

        window.alert("Vous devez entrer des mots de passe similaire !");
    }
}
