import React from 'react';
import { connect } from "react-redux";
//import { actionCreatorClick } from '../../redux/categoriesReducer.ts';
import Categories from "./Categories.tsx";


let mapStateToProps = (state) => {
   
    return {
        categories: state.categoriesBlock.categories,
        
    }
}

const CategoriesContainer = connect(mapStateToProps) (Categories);

export default CategoriesContainer

