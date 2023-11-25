const boxArea = document.getElementById("game-window");
const outOfBox = document.querySelector("html");
const ball = document.querySelector(".ball");

boxArea.addEventListener("click", movement, false);
outOfBox.addEventListener("click", outOfBounds, false);

function outOfBounds(){
    alert("Out of bounds!");
}

function movement(event){
    let bounds = boxArea.getBoundingClientRect();
    ball.style.transform = "translate(" + (event.pageX-bounds.left-20) + "px, "+(event.pageY-bounds.top-20) + "px)";
    event.stopPropagation();
}