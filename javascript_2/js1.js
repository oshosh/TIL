const title = document.querySelector('#title')
title.innerHTML = 'hi! from js'
document.title = 'I own you now'

const CLICKED_CLASS = 'clicked';

// 토글 기능
function makeAutoToggle() {
    // const currentClass = title.className
    const hasClass = title.classList.contains(CLICKED_CLASS)
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS)
    } else {
        title.classList.remove(CLICKED_CLASS)
    }
}

function handleClick() {
    // makeAutoToggle()
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    title.addEventListener('click', handleClick)
}

init()

