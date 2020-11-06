function textChange(value) {
    let text = document.getElementById("txt");

    switch (value) {
        case "pink":
            (text.style.color == "pink") ? text.style.color = "initial" : text.style.color = "pink";
            break;
        case "blue":
            (text.style.color == "blue") ? text.style.color = "initial" : text.style.color = "blue";
            break;
        case "purple":
            (text.style.color == "purple") ? text.style.color = "initial" : text.style.color = "purple";
            break;
        case "bold":
            (text.style.fontWeight == "bold") ? text.style.fontWeight = "normal" : text.style.fontWeight = "bold";
            break;
        case "italic":
            (text.style.fontStyle == "italic") ? text.style.fontStyle = "normal" : text.style.fontStyle = "italic";
            break;
    }
}