const clockContainer = document.querySelector('.js-clock')
    , clockTitle = document.querySelector('h1');

function getTime() {
    const date = new Date()

    const minutes = date.getMinutes()
    const hours = date.getHours()
    const getSeconds = date.getSeconds()

    clockTitle.innerText = `
    ${hours === 0 || String(hours).length === 1 ? '0' + hours : hours}:${
        minutes === 0 || String(minutes).length === 1 ? '0' + minutes : minutes}:${
        getSeconds === 0 || String(getSeconds).length === 1 ? '0' + getSeconds : getSeconds}`

    clockTitle.style.color = 'white'
    clockTitle.style.fontSize = '50px'
}

function init() {
    getTime()
    setInterval(getTime, 1000);
}

init()