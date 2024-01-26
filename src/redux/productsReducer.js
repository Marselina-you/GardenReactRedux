

let initialState = {
    products: [
        {id: 1, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2, liked: false, addedCart: false},
        {id: 2, name: 'азалия двулистная', price: 2500, img: 'product.png', category: 2, liked: false, addedCart: false},
        {id: 3, name: 'кактус двулистная', price: 2000, img: 'product.png', category: 2, liked: false, addedCart: false},
        {id: 4, name: 'азалия двулистная', price: 1000, img: 'product.png', category: 2, liked: false, addedCart: false},
        {id: 5, name: 'азалия двулистная', price: 2000, img: 'product.png', category: 2, liked: false, addedCart: false},
    ],
    pageSize: 10,
    isLikes: false,
    currentPage: 2,
    isCart: false

}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GARDEN_LIKE': 
        return {...state,
        products: state.products.map(u => {
            if (u.id === action.productId) {
                return {...u, liked: true}
            }
            return u;
        })}
        case 'GARDEN_UNLIKE': 
        return {...state,
        products: state.products.map(u => {
            if (u.id === action.productId) {
                return {...u, liked: false}
            }
            return u;
        })}
        case 'GARDEN_ADD_CART': 
        return {...state,
        products: state.products.map(u => {
            if (u.id === action.productId) {
                return {...u, addedCart: true}
            }
            return u;
        })}
        case 'GARDEN_DELETE_CART': 
        return {...state,
        products: state.products.map(u => {
            if (u.id === action.productId) {
                return {...u, addedCart: false}
            }
            return u;
        })}
        case 'GARDEN_SET_PRODUCTS': 
        return {...state, products: [...state.products, ...action.products]}
        default: 
        return state;
    }

}

export const actionSetProducts = (products) => ({type: 'GARDEN_SET_PRODUCTS', products})
export const actionCreatorLike = (productId) => ({type:'GARDEN_LIKE', productId})
export const actionCreatorUnLike = (productId) => ({type: 'GARDEN_UNLIKE', productId})
export const addCart = (productId) => ({type:'GARDEN_ADD_CART', productId})
export const deleteCart = (productId) => ({type: 'GARDEN_DELETE_CART', productId})
export default productsReducer;