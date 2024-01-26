import { AppStateType } from "./redux-store";
export const getIsLiked = (state: AppStateType) => {
    return state.productsPage.isLikes;

}
export const getProducts = (state: AppStateType) => {
    return state.productsPage.products;

}