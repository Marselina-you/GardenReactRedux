import { ProductType } from "../types/types"
import { updateObjectInArray } from "../utils/object-helpers";
import {InferActionsTypes} from './redux-store';


let initialState = {
    products: [
        {id: 1, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2, liked: false},
        {id: 2, name: 'азалия двулистная', price: 2500, img: 'product.png', category: 2, liked: false},
        {id: 3, name: 'кактус двулистная', price: 2000, img: 'product.png', category: 2, liked: false},
        {id: 4, name: 'азалия двулистная', price: 1000, img: 'product.png', category: 2, liked: false},
        {id: 5, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2, liked: false}
    ] as Array<ProductType>,

    pageSize: 10,
    totalProductsCount: 0,
    currentPage: 2,
    isLikes: true,
    isCart: false


}
export type InitialStateType = typeof initialState;
const productsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case 'GARDEN_LIKE': 
        return {...state,
            products: updateObjectInArray(state.products, action.productId, "id", {liked: false})}
        

        default: 
        return state;
    }

}
export const actions = {
    actionCreatorLike: (productId: number) => ({type: 'GARDEN_LIKE', productId}),
    actionCreatorUnLike: (productId: number) => ({type: 'GARDEN_UNLIKE', productId})
}

export default productsReducer;
type ActionsType = InferActionsTypes<typeof actions>
