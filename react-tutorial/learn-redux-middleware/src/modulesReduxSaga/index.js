import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from './posts'

const rootReducer = combineReducers({ counter, posts });

// 내보낼 saga 등록 yield all([counterSaga(), ....., .....]);
export function* rootSaga() {
    yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;