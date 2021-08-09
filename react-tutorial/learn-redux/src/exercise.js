import { createStore } from "redux";

const initialState = {
    counter: 0,
    text: '',
    list: []
};

// action type
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

// action 생성 함수
const increase = () => (
    {
        type: INCREASE
    }
)

const decrease = () => ({
    type: DECREASE,
})

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// Reducer
// 초기상태 구현 시  state = initialState
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

const store = createStore(reducer)
console.log('store 초기 상태')
console.log(store.getState())

const listener = () => {
    const state = store.getState()
    console.log(state)
}

const unsubscribe = store.subscribe(listener)
//unsubscribe();

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({ id: 1, text: '와우' }))

window.store = store
window.unsubscribe = unsubscribe