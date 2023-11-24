let boxArea = document.getElementById("game-window");
let outOfBox = document.querySelector("html");
let ball = document.querySelector(".ball");

boxArea.addEventListener("click", playerMove, false);
outOfBox.addEventListener("click", errorMsg, false);
ball.addEventListener("click", doNotMove, false);

function errorMsg(){
    alert("Kliknięto poza obszarem prostokąta");
}

function playerMove(event){
    console.log("ok");
    let bounds = boxArea.getBoundingClientRect();
    ball.style.transform = "translate(" + (event.pageX-bounds.left-20) + "px, "+(event.pageY-bounds.top-20) + "px)";
    event.stopPropagation();

}
function doNotMove(event){
    event.stopPropagation();
}