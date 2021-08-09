import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 리듀서를 묶음
const rootReducer = combineReducers({
    todos,
    counter
})

export default rootReducer;