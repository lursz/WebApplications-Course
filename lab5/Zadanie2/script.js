const images = ['img/1.jpg','img/2.jpg','img/3.jpg'];
const colors = ['red','green','blue'];

let image = document.getElementsByTagName("img");
image = image[0];

let button = document.getElementById("change");
button.addEventListener('click', execute);

let flag = 1;
function changePhoto() {
    image.src = images[flag%images.length];
    console.log(image.src);
    flag++;
}

function changeCSS() {
    // document.getElementsByClassName("img")[0].style.border = `4px solid ${colors[flag%colors.length]}`;
    document.querySelector(".img").style.border = `4px solid ${colors[flag%colors.length]}`;
}

function execute() {
    changePhoto();
    changeCSS();
}