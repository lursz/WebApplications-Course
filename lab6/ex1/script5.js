let blueObject = document.getElementById("blue");
let redObject = document.getElementById("red");
let yellowObject = document.getElementById("yellow");
let box = document.querySelector(".box");
let resetButton = document.querySelector(".reset");
let propagationButton = document.querySelector(".propagation");
let swapButton = document.querySelector(".swap");

let colors = ["blue", "red", "yellow"];

let score = document.querySelector(".score");
let clickedColor = document.querySelector(".click-info");

let blueActive = true;
let redActive = true;
let yellowActive = true;

let myScore = 0;
let propagation = true;
let capturingPhase = false;

blueObject.addEventListener("click", increaseScore, false);
redObject.addEventListener("click", increaseScore, false);
yellowObject.addEventListener("click", increaseScore, false);

resetButton.addEventListener("click", resetCounter);
propagationButton.addEventListener("click", togglePropagation);
swapButton.addEventListener("click", toggleCapturingPhase);

function increaseScore(event){
    if(this.id == "blue") increase(1, "niebieski");
    else if(this.id == "red") increase(2, "czerwony");
    else if(this.id == "yellow") increase(5, "żółty");
    
    if(!propagation && !capturingPhase) event.stopPropagation();
    else if(capturingPhase && !propagation) event.stopImmediatePropagation();
}

function increase(value, color){
    myScore += value;
    score.innerText = "Twój wynik: " + myScore;
    clickedColor.innerText = "nacisnąłeś " + color + " o wartości " + value;
    console.log(capturingPhase ,blueActive, redActive, yellowActive);
    if(myScore > 30 && redActive){
        redObject.removeEventListener("click", increaseScore, capturingPhase);
        redObject.style.backgroundColor="grey";
        redActive = false;
    }
    if(myScore > 50 && yellowActive){
        yellowObject.removeEventListener("click", increaseScore, capturingPhase);
        yellowObject.style.backgroundColor="lightgrey";
        yellowActive = false;
    }
    score.innerText = "Twój wynik: " + myScore;
    clickedColor.innerText = "nacisnąłeś " + color + " o wartości " + value;
}

function resetCounter(){
    myScore = 0;
    score.innerText = "Twój wynik: " + myScore;
    redActive = true;
    yellowActive = true;
    redObject.style.backgroundColor = "red";
    yellowObject.style.backgroundColor = "yellow";
    redObject.addEventListener("click", increaseScore, capturingPhase);
    yellowObject.addEventListener("click", increaseScore, capturingPhase);
}

function togglePropagation(){
    propagation = !propagation
    propagationButton.innerText = "Propagation: " + propagation;
    if(propagation){
        propagationButton.style.backgroundColor = "lightgreen";
    }
    else{
        propagationButton.style.backgroundColor = "red";
    }
}
function toggleCapturingPhase(){
    if(!capturingPhase){
        swapButton.innerText = "Capturing Phase";
        blueObject.removeEventListener("click", increaseScore, false);
        blueObject.addEventListener("click", increaseScore, true);
        if(redActive){
            redObject.removeEventListener("click", increaseScore, false);
            redObject.addEventListener("click", increaseScore, true);
        }
        if(yellowActive){
            yellowObject.removeEventListener("click", increaseScore, false);
            yellowObject.addEventListener("click", increaseScore, true);
        }
    }
    else{
        swapButton.innerText = "Bubble Phase";
        blueObject.removeEventListener("click", increaseScore, true);
        blueObject.addEventListener("click", increaseScore, false);
        if(redActive){
            redObject.removeEventListener("click", increaseScore, true);
            redObject.addEventListener("click", increaseScore, false);
        }
        if(yellowActive){
            yellowObject.removeEventListener("click", increaseScore, true);
            yellowObject.addEventListener("click", increaseScore, false);
        }
    }
    capturingPhase = !capturingPhase;
}