let nameButton = document.getElementById("getname");
nameButton.addEventListener('click', askForName);

let myName = ""

function askForName() {
    myName = prompt("Podaj swoje imię");
    if (myName.endsWith('a')) {
        document.getElementById("welcome").innerHTML = "Witam panią " + myName;
    }
    else {
        document.getElementById("welcome").innerHTML = "Witam pana " + myName + "a";
    }
};