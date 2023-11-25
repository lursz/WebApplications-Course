const imageArray = document.querySelectorAll("#gallery img");
const modalBody = document.querySelector(".modal-body img");
const modalHeader = document.querySelector(".modal-header h5");

function replaceImg(event, pic) {
    modalBody.src = pic.src;
    modalHeader.innerHTML = pic.alt;
}

function nextImg() {
    let i = 0;
    for (let img of imageArray) {
        if (img.src === modalBody.src) {
            if (i === imageArray.length - 1) {
                modalBody.src = imageArray[0].src;
                modalHeader.innerHTML = imageArray[0].alt;
            } else {
                modalBody.src = imageArray[i + 1].src;
                modalHeader.innerHTML = imageArray[i + 1].alt;
            }
            break;
        }
        i++;
    }
}

function prevImg() {
    let i = 0;

    for (let img of imageArray) {
        if (img.src === modalBody.src) {
            if (i === 0) {
                modalBody.src = imageArray[imageArray.length - 1].src;
                modalHeader.innerHTML = imageArray[imageArray.length - 1].alt;
            } else {
                modalBody.src = imageArray[i - 1].src;
                modalHeader.innerHTML = imageArray[i - 1].alt;
            }
            break;
        }
        i++;
    }
}

function init() {
    const imageArray = document.querySelectorAll("#gallery img");

    for (let img of imageArray) {
        img.addEventListener("click", (event) => replaceImg(event, img));
    }

    const prevBtn = document.querySelector(".modal-footer .btn:nth-child(1)");
    prevBtn.addEventListener("click", prevImg);
    const nextBtn = document.querySelector(".modal-footer .btn:nth-child(3)");
    nextBtn.addEventListener("click", nextImg);
}

init();