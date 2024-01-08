import { combineReducers, legacy_createStore } from "redux"
import categoriesReducer from "./categoriesReducer";


let reducers = combineReducers({
    categoriesBlock: categoriesReducer
})
let store = legacy_createStore(reducers)


window.store = store;
export default store;
