import React from 'react';
import { connect } from "react-redux";
import { actionCreatorClick } from '../../redux/categoriesReducer';
import Categories from "./Categories";


let mapStateToProps = (state) => {
   
    return {
        categoriesProps: state.categoriesBlock,
        
    }
}

const CategoriesContainer = connect(mapStateToProps, actionCreatorClick) (Categories);

export default CategoriesContainer

