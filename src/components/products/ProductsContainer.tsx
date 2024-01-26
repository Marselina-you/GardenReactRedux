import React from 'react';
import { connect } from "react-redux";
import Products from './Products.tsx';

import { getIsLiked, getProducts } from '../../redux/products-selectors.ts';
import { AppStateType } from '../../redux/redux-store';
import { actions } from '../../redux/productsReducer.ts';
import { compose } from 'redux';


type mapStateToProps = {
    pageSize: number
    totalProductsCount: number
    currentPage: number
    isLikes: boolean
    isCart: boolean
}

let mapStateToProps = (state: AppStateType) => {
  
  return {
    products: getProducts(state),
    isLikes: getIsLiked(state)
      
  }
}
//export default ProductsContainer;
export default compose(
  connect(mapStateToProps, {
    like: actions.actionCreatorLike, unlike: actions.actionCreatorUnLike
  })
)(Products)