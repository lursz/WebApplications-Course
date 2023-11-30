const boxArea = document.getElementById("game-window");
const outOfBox = document.querySelector("html");
const ball = document.querySelector(".ball");

boxArea.addEventListener("click", movement, false);
outOfBox.addEventListener("click", outOfBounds, false);

function outOfBounds(){
    let outOfBounds = document.createElement("div");
    outOfBounds.innerText = "Out of bounds";
    outOfBounds.style.position = "absolute";
    outOfBounds.style.top = `${event.pageY}px`;
    outOfBounds.style.left = `${event.pageX}px`;
    document.body.appendChild(outOfBounds);
    setTimeout(removeInfo, 5, outOfBounds);
}

function movement(event){
    let bounds = boxArea.getBoundingClientRect();
    ball.style.transform = `translate(${event.pageX-bounds.left-20}px, ${event.pageY-bounds.top-20}px)`;
    event.stopPropagation();
}