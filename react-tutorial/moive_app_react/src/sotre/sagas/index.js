import { spawn } from "redux-saga/effects";
import watchSearch from './SearchSaga'

export default function* rootSaga() {
    yield spawn(watchSearch);
}
