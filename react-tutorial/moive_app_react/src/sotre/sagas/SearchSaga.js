import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

const fetchData = async () => {
    return await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
}

function* fetchSearchSaga(action) {

    try {
        const json = {
            name: action.payload
        }

        // const { data } = yield call([axios, 'post'], '/api/nba/player', json)
        const { data: {
            data: { movies }
        } } = yield call(fetchData)

        yield put(actions.searchSuccess(movies));
    } catch (error) {
        yield put(actions.searchFail(error.response));
    }
}

export default function* watchSearch() {
    yield takeEvery(actions.SEARCH, fetchSearchSaga);
}