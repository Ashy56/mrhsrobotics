function initialize() {
    document.getElementById("4284").addEventListener("click", team1);
    document.getElementById("7795").addEventListener("click", team2);
    document.getElementById("FTC").addEventListener("click", FTC);
    document.getElementById("Gracious").addEventListener("click", Gracious);
}

function team1() {
    document.getElementById("middleIframe").src="../4284.html";

}

function team2(){
    document.getElementById("middleIframe").src="../7795.html";
}

function FTC(){
    document.getElementById("middleIframe").src="../ftc.html";
}

function Gracious(){
    document.getElementById("middleIframe").src="../gracious.html";
}

