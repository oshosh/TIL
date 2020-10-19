const toDoForm = document.querySelector('.js-toDoForm')
    , toDoInput = toDoForm.querySelector('input')
    , toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = []

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
function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;

    toDoList.removeChild(li)
    const cleanToDos = toDos.reduce(function (acc, cur, idx) {
        if (String(cur.id) !== String(li.id)) {
            acc.push({ ...cur, id: idx + 1 })
        }
        return acc
    }, [])
    toDos = cleanToDos
    saveToDos()
}

function paintToDo(text) {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const span = document.createElement('span')
    const newId = toDos.length + 1;

    delBtn.innerText = '❌'
    delBtn.addEventListener('click', deleteToDo)

    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = newId
    toDoList.appendChild(li)

    li.style.color = 'white'

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