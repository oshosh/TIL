import { SEARCH_SUCCESS } from "../actions";

// reducer 구현
export default function reducerAPI(state = init, action) {

    switch (action.type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                movies: action.data,
                isLoading: false
            };
        default:
            return state
    }
}

// state 초기화
const init = {
    isLoading: true,
    movies: []
}