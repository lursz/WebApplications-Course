const addButton = document.getElementById("add");
const delButton = document.getElementById("delete");
addButton.addEventListener('click', addElement, false);
delButton.addEventListener('click', delElement, false);

const myList = document.getElementById("myList");


function addElement() {
    const newElement = document.createElement("li");
    const counter = myList.childElementCount + 1;
    newElement.innerText = "Item " + counter;
    myList.appendChild(newElement);
}

function delElement() {
    if (myList.childElementCount > 0) {
        myList.removeChild(myList.children[0]);
    }
}