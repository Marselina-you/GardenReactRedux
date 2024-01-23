import React from 'react';


import { actionCreatorClick } from '../../redux/categoriesReducer.ts';
import { connect } from "react-redux";
import Feedbacks from './Feedbacks.tsx';

let mapStateToProps = (state) => {
  
  return {
      comments: state.commentsBlock.comments,
      
  }
}

const FeedbacksContainer = connect(mapStateToProps, actionCreatorClick) ( Feedbacks);

export default FeedbacksContainer