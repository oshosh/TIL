const toDoForm = document.querySelector('.js-toDoForm')
    , toDoInput = toDoForm.querySelector('input')
    , toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const toDos = []

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function (item) {
            paintToDo(item.text)
        })
    } else {

    }
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const span = document.createElement('span')
    const newId = toDos.length + 1;

    delBtn.innerText = '❌'
    span.innerText = text

    li.appendChild(delBtn)
    li.appendChild(span)
    toDoList.appendChild(li)

    const toDosObj = {
        text: text,
        id: newId
    }

    toDos.push(toDosObj)
    saveToDos()
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = ''
}

function init() {
    loadToDos()
    toDoForm.addEventListener('submit', handleSubmit)
}

init()