// 合并所有reducer
import { combineReducers } from "redux";
import { count, CountState } from "./count/count.redux";

export interface ReducerState {
    count: CountState
}

export default combineReducers({ count });
