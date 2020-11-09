let resetBorder;

function changeBorder(id) {
    let input = document.getElementById(id);

    if (!resetBorder) {
        input.style.borderColor = "black";
        resetBorder = true;
    }
    else {
        input.removeAttribute("style", "border-color");
        resetBorder = false;
    }
}