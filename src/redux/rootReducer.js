import { combineReducers } from "redux";
import { operationsReducer } from "./todolist/reducers/operations";

export const rootReducer = combineReducers({
    operationsReducer,
})