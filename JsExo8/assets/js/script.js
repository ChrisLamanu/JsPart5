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


let startID = 0;

function duplicateDiv() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild  

    let divNameToDuplicate = document.getElementById("name" + startID);
    let divAgeToDuplicate = document.getElementById("age" + startID);
    startID++;
    
    let divNameCloned = divNameToDuplicate.cloneNode(true);
    let divAgeCloned = divAgeToDuplicate.cloneNode(true);
    divNameCloned.id = "name" + startID;
    divAgeCloned.id = "age" + startID;

    divNameToDuplicate.parentNode.appendChild(divNameCloned);
    divAgeToDuplicate.parentNode.appendChild(divAgeCloned);
}