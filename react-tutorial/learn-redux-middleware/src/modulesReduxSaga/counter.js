import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
// Action type
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const INCREASE_ASYNC = 'INCREASE_ASYNC'
const DECREASE_ASYNC = 'DECREASE_ASYNC'

// Action Object
export const increase = () => ({ type: INCREASE })
export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decrease = () => ({ type: DECREASE })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

// Saga Generator
function* increaseSaga() {
    yield delay(1000)
    yield put(increase()); // dispatch
}

function* decreaseSaga() {
    yield delay(1000)
    yield put(decrease()); // dispatch
}

export function* counterSaga() {
    // INCREASE_ASYNC action dispatch 시 increaseSaga 전달
    yield takeEvery(INCREASE_ASYNC, increaseSaga) // 호출 시 전부 호출이 됨
    yield takeLatest(DECREASE_ASYNC, decreaseSaga) // 호출 시 마지막 한번만 호출 됨

    // takeLeading 가장 먼저 들어온것만 처리 하고 끝난 뒤 다시 처리가 가능함
}

// init
const initialState = 0;

// reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
