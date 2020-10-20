const COORDS = 'coords';


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const coordsObj = { latitude, longitude }
    saveCoords(coordsObj)
}

function handleGeoError() {
    console.log('error')
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null || loadedCoords === undefined) {
        askForCoords()
    } else {

    }
}

function init() {
    loadCoords()
}

init()