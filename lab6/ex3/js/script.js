function qA(cities) {
    let result = "";
    cities.forEach(element => {
        (element.province == "małopolskie") ? result += `${element.name}, ` : null;
    });
    result = result.substring(0, result.length - 2) + ".";
    document.getElementById("question-a").innerHTML = result;
}

function qB(cities) {
    let result = "";
    const regex = /^[^aA]*[aA][^aA]*[aA][^aA]*$/
    cities.forEach(element => {
        (regex.test(element.name)) ? result += element.name + ", " : null;
    });
    result = result.substring(0, result.length - 2) + ".";
    document.getElementById("question-b").innerHTML = result;
}

function qC(cities) {
    let result = "";
    // ... - spread operator to copy array
    let sortedCities = [...cities].sort((a, b) => { return b.density - a.density });
    result = sortedCities[4].name + ".";
    document.getElementById("question-c").innerHTML = result;
}

function qD(cities) {
    let result = "";
    cities.forEach(element => {
        if (element.people > 100000) result += `${element.name} City, `;
    })
    document.getElementById("question-d").innerHTML = result;
}

function qE(cities) {
    let higher = 0;
    let lower = 0;
    cities.forEach(element => {
        (element.people > 80000) ? higher += 1 : lower += 1;
    })
    let result = `Więcej jest miast ${higher > lower ? "powyżej" : "poniżej"} 80 000 mieszkańców. Miast powyżej 80 000 jest ${higher}, poniżej ${lower}.`
    document.getElementById("question-e").innerHTML = result;
}

function qF(cities) {
    let sum = 0;
    let count = 0;
    cities.forEach(element => {
        if (element.township.startsWith("P")) {
            sum += element.area;
            count += 1;
        };
    })
    let average = sum / count;
    let result = average.toPrecision(5);
    document.getElementById("question-f").innerHTML = result;
}

function qG(cities) {
    let count = 0;
    let countHigher = 0;
    cities.forEach(element => {
        if (element.province == "pomorskie") {
            count += 1;
            if (element.people > 5000) countHigher += 1;
        };
    })

    let result = `${(count == countHigher) ? "Wszystkie " : "Nie wszystkie "}miasta w województwie pomorskim mają więcej niż 5 000 mieszkańców. <br>
    Ilość miast z więcej niż 5 000 mieszkańców: ${countHigher}. <br>
    Ilość wszystkich miast w województwie: ${count}.`;

    document.getElementById("question-g").innerHTML = result;
}

async function getCitiesData() {
    let newObject = await fetch('./city.json');
    return await newObject.json();
}

async function init() {
    const Cities = await getCitiesData();
    qA(Cities);
    qB(Cities);
    qC(Cities);
    qD(Cities);
    qE(Cities);
    qF(Cities);
    qG(Cities);
}

init();

