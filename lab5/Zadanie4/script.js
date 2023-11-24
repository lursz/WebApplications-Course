const incrementButton = document.getElementById("increment");
const onButton = document.getElementById("on");
onButton.addEventListener("click", on);
const offButton = document.getElementById("off");
offButton.addEventListener("click", off);
const display_counter = document.querySelector("h1");

let counter = 0;

function on(){
    incrementButton.addEventListener("click", increment);
}

function off(){
    incrementButton.removeEventListener("click", increment);
    counter = 0;
}

function increment(){
    counter += 1;
    display_counter.innerText = `COUNTER: ${counter}`;
}