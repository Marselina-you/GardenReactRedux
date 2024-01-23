import React from 'react';
import { connect } from "react-redux";
import Products from './Products.tsx';
//import { actionCreatorClick } from '../../redux/productsReducer';


let mapStateToProps = (state) => {
  
  return {
    products: state.productsPage.products,
      
  }
}

const ProductsContainer = connect(mapStateToProps) (Products);

export default ProductsContainer;