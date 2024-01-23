import { ProductType } from "../types/types"

const CLICK = "CLICK"
let initialState = {
    products: [
        {id: 1, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2},
        {id: 2, name: 'азалия двулистная', price: 2500, img: 'product.png', category: 2},
        {id: 3, name: 'кактус двулистная', price: 2000, img: 'product.png', category: 2},
        {id: 4, name: 'азалия двулистная', price: 1000, img: 'product.png', category: 2},
        {id: 5, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2}
    ] as Array<ProductType>,

    pageSize: 10,
    isLikes: false,
    currentPage: 2,
    isCart: false

}
export type InitialStateType = typeof initialState;
const productsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case CLICK: 
        return {state}

        default: 
        return state;
    }

}
export const actionCreatorClick = () => ({type: CLICK})
export default productsReducer;