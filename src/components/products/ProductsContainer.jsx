import React from 'react';
import { connect } from "react-redux";
import Products from './Products';
import { actionCreatorClick } from '../../redux/productsReducer';


let mapStateToProps = (state) => {
  
  return {
    productsProps: state.productsPage,
      
  }
}

const ProductsContainer = connect(mapStateToProps, actionCreatorClick) (Products);

export default ProductsContainer;