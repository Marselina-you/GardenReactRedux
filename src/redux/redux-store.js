import { combineReducers, legacy_createStore } from "redux"
import categoriesReducer from "./categoriesReducer";
import feedReducer from "./feedReducer";
import productsReducer from "./productsReducer";


let reducers = combineReducers({
    categoriesBlock: categoriesReducer,
    commentsBlock: feedReducer,
    productsPage: productsReducer
})
let store = legacy_createStore(reducers)


window.store = store;
export default store;
