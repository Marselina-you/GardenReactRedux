import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducer";
import feedReducer from "./feedReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
    reducer: {
        categoriesBlock: categoriesReducer,
        commentsBlock: feedReducer,
        productsPage: productsReducer
    }
})




window.store = store;
export default store;
