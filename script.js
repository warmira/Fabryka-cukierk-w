function order() {
    let shape = document.getElementById("shape").value;
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let napis = "Twoje zamówienie to cukierek ";
    let color = "rgb(" + r + "," + g + "," + b + ")";
    if (shape == "1") {
        napis += "cytryna";
    }
    else if (shape == "2") {
        napis += "liść";
    }
    else if ( shape == "3") {
        napis += "banan";
    }
    else {
        napis += "inny";
    }
    document.getElementById("score").innerHTML = napis;
    document.getElementById("color").style.backgroundColor = color;
}
