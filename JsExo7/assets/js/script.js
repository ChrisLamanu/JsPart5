// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue

let curRoll = parseInt(window.getComputedStyle(txt, null).getPropertyValue("font-size"));
let addRoll = 1;

function textChanger(event) {
    let txt = document.getElementById("txt");

    if (event.deltaY < 0) {
        curRoll += addRoll;
        txt.style.fontSize = curRoll + "px";     
    }
    else {
        curRoll -= addRoll;
        txt.style.fontSize = curRoll + "px"; 
    }
}