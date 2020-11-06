let imgSwitch;

function imageSwitch() {
    let img = document.getElementsByClassName("imgContainer");

    let imgSrc = "assets/img/avengers-gameverse-marvel-626-iron-man-1-1596029401_0x460.jpg";
    let imgSrc_b = "assets/img/my-hero-academia-803-katsuki-bakugo-1-1595931222_0x460.jpg";

    if (imgSwitch) {
        // console.log("Activation");
        img.item(0).setAttribute("style", `background-image: url( ${imgSrc} );`);
        imgSwitch = false;
    }
    else {
        // console.log("Desactivation");
        img.item(0).setAttribute("style", `background-image: url( ${imgSrc_b} );`);
        imgSwitch = true;
    }
}

// Correction
//     const image = document.getElementById("imgContainer");

//     image.onclick = function () {
//         image.setAttribute("style", `background-image: url("assets/img/avengers-gameverse-marvel-626-iron-man-1-1596029401_0x460.jpg");`);
//     }
//     image.onmouseover = function () {
//         image.setAttribute("style", "width: 40rem");
//     }
//     image.onmouseleave = function () {
//         image.setAttribute("style", "width: 30rem");
//     }