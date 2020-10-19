const body = document.querySelector('body')
const IMG_NUMBER = 1

function paintImage(imageNumber) {
    const image = new Image()
    image.src = `images/${imageNumber + 1}.jpg`
    image.classList.add('bgImage')
    body.prepend(image)
    // image.addEventListener('loadend',)
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init() {
    const randomNumber = getRandom()
    paintImage(randomNumber)
}

init()