import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducer.ts";
import feedReducer from "./feedReducer.ts";
import productsReducer from "./productsReducer.ts";

let rootReducer = combineReducers({
 
        categoriesBlock: categoriesReducer,
        commentsBlock: feedReducer,
        productsPage: productsReducer
    
})
type RootState = typeof rootReducer
export type AppStateType = ReturnType<RootState>

const store = legacy_createStore(rootReducer)


//window.store = store;
export default store;
