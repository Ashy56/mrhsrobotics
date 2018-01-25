function initialize() {
    document.getElementById("4284").addEventListener("click", team1);
    document.getElementById("7795").addEventListener("click", team2);
    document.getElementById("FTC").addEventListener("click", ftc);
    document.getElementById("Gracious").addEventListener("click", gracious);
    document.getElementById("home").addEventListener("click", home);
}

function team1() {
    document.getElementById("middleIframe").src="4284.html";

}

function team2(){
    document.getElementById("middleIframe").src="7795.html";
}

function ftc(){
    document.getElementById("middleIframe").src="ftc.html";
}

function gracious(){
    document.getElementById("middleIframe").src="gracious.html";
}
function home(){
    document.getElementById("middleIframe").src="home.html";
}

