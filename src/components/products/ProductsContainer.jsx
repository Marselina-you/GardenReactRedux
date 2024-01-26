import React from 'react';
import { connect } from "react-redux";
import Products from './Products';
import { actionCreatorLike, actionCreatorUnLike, actionSetProducts, addCart, deleteCart } from '../../redux/productsReducer';


let mapStateToProps = (state) => {
  
  return {
    products: state.productsPage.products,
      
  }
}
let mapDispatchProps = (dispatch) => {
  return {
    likes: (productId) => {
      dispatch(actionCreatorLike(productId))
    },
    unlikes: (productId) => {
      dispatch(actionCreatorUnLike(productId))
    },
    addToCart: (productId) => {
      dispatch(addCart(productId))
    },
    deleteFromCart: (productId) => {
      dispatch(deleteCart(productId))
    },
    setProducts: (products) => {
      dispatch(actionSetProducts(products))
    }
  }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchProps) (Products);

export default ProductsContainer;