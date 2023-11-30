let firstObject = document.getElementById("first-box");
firstObject.addEventListener("click", init, false);
let secondObject = document.getElementById("second-box");
secondObject.addEventListener("click", init, false);
let thirdObject = document.getElementById("third-box");
thirdObject.addEventListener("click", init, false);

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetCounter);
let propagationButton = document.querySelector(".propagation");
propagationButton.addEventListener("click", togglePropagation);
let swapButton = document.querySelector(".swap");
swapButton.addEventListener("click", toggleCapturingPhase);

let clickinfo = document.querySelector(".click-info");
let score = document.querySelector(".score");
let blueActive = true, redActive = true, yellowActive = true;

let myScore = 0;
let propagation = true;
let capturingPhase = false;

let infoIdCounter = 0;

function init(event) {
    if (this.id === "first-box") increase(1, "niebieski");
    else if (this.id === "second-box") increase(2, "czerwony");
    else if (this.id === "third-box") increase(5, "żółty");

    if (!propagation) event.stopPropagation();
}

function removeInfo(id) {
    let info = document.getElementById(id);
    info.remove();
}

function createInfo(color, value) {
    let info = document.createElement("div");
    info.classList.add("info");
    info.id = `info-${infoIdCounter}`;
    info.innerText = `Clicked: ${color} with value ${value}`;
    clickinfo.appendChild(info);
    setTimeout(removeInfo, 5000, info.id);
    infoIdCounter++;
}

function increase(value, color) {
    myScore += value;
    if (myScore > 50 && redActive) {
        secondObject.removeEventListener("click", init, capturingPhase);
        secondObject.style.backgroundColor = "grey";
        redActive = false;
    }
    if (myScore > 30 && yellowActive) {
        thirdObject.removeEventListener("click", init, capturingPhase);
        thirdObject.style.backgroundColor = "lightgrey";
        yellowActive = false;
    }
    score.innerText = `Score: ${myScore}`;

    createInfo(color, value);
}
/* --------------------------------- Buttons -------------------------------- */
function resetCounter() {
    myScore = 0;
    score.innerText = `Score: ${myScore}`;
    redActive = true;
    yellowActive = true;
    secondObject.style.backgroundColor = "red";
    thirdObject.style.backgroundColor = "yellow";
    secondObject.addEventListener("click", init, capturingPhase);
    thirdObject.addEventListener("click", init, capturingPhase);
}


function toggleCapturingPhase() {
    capturingPhase = !capturingPhase;

    swapButton.innerText = capturingPhase ? "Change order" : "Change order";
    firstObject.removeEventListener("click", init, !capturingPhase);
    firstObject.addEventListener("click", init, capturingPhase);
    if (redActive) {
        secondObject.removeEventListener("click", init, !capturingPhase);
        secondObject.addEventListener("click", init, capturingPhase);
    }
    if (yellowActive) {
        thirdObject.removeEventListener("click", init, !capturingPhase);
        thirdObject.addEventListener("click", init, capturingPhase);
    }
}


function togglePropagation() {
    propagation = !propagation
    propagationButton.innerText = `Propagation: ${propagation}`
    if (propagation) {
        propagationButton.classList.remove("btn-danger");
        propagationButton.classList.add("btn-success");
    }
    else {
        propagationButton.classList.remove("btn-success");
        propagationButton.classList.add("btn-danger");
    }
}

