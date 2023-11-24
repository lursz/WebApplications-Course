async function getCitiesData() {
    let newObject = await fetch('./city.json');
    return await newObject.json();
}

function getA(cities) {
    let answer = "";
    cities.forEach(element => {
        (element.province == "małopolskie") ? answer += element.name + ", " : null;
    });
    answer = answer.substring(0, answer.length - 2) + ".";
    document.getElementById("question-a").innerHTML = answer;
}

function getB(cities) {
    let answer = "";
    const regExp = /^[^aA]*[aA][^aA]*[aA][^aA]*$/
    cities.forEach(element => {
        (regExp.test(element.name)) ? answer += element.name + ", " : null;
    });
    answer = answer.substring(0, answer.length - 2) + ".";
    document.getElementById("question-b").innerHTML = answer;
}

function getC(cities) {
    let answer = "";
    const sortedCities = [...cities].sort(function (a, b) { return b.dentensity - a.dentensity });
    answer = sortedCities[4].name + ".";
    document.getElementById("question-c").innerHTML = answer;
}

function getD(cities) {
    let answer = "";
    cities.forEach(element => {
        if (element.people > 100000) answer += element.name + " City, "
    })
    document.getElementById("question-d").innerHTML = answer;
}

function getE(cities) {
    let higher = 0;
    let lower = 0;
    cities.forEach(element => {
        (element.people > 80000) ? higher += 1 : lower += 1;
    })
    let answer = "Więcej jest miast " + ((higher > lower) ? "powyżej " : "poniżej ") + "80 000 mieszkańców. " +
        "Miast powyżej 80 000 jest " + higher + ", a poniżej " + lower + ".";
    document.getElementById("question-e").innerHTML = answer;
}

function getF(cities) {
    let sum = 0;
    let count = 0;
    cities.forEach(element => {
        if (element.township.startsWith("p")) {
            sum += element.area;
            count += 1;
        };
    })
    let average = sum / count;
    let answer = average.toPrecision(5) + ", z dokładnością do 5 cyfr znaczących."
    document.getElementById("question-f").innerHTML = answer;
}

function getG(cities) {
    let count = 0;
    let countHigher = 0;
    cities.forEach(element => {
        if (element.province == "pomorskie") {
            count += 1;
            if (element.people > 5000) countHigher += 1;
        };
    })
    let answer = ((count == countHigher) ? "Wszystkie " : "Nie wszystkie ") + "miasta w województwie pomorskim mają ponad 5 000 mieszkańców. " + "<br>" +
        "Ilość miast posiadających więcej niż 5tyś mieszkańców: " + countHigher + "." + "<br>" +
        "Ilość wszystkich miast w tym województwie: " + count + ".";
    document.getElementById("question-g").innerHTML = answer;
}


async function run() {
    const Cities = await getCitiesData();
    getA(Cities);
    getB(Cities);
    getC(Cities);
    getD(Cities);
    getE(Cities);
    getF(Cities);
    getG(Cities);
}

run();

