import React from 'react';


import { actionCreatorClick } from '../../redux/categoriesReducer';
import { connect } from "react-redux";
import Feedbacks from './Feedbacks';

let mapStateToProps = (state) => {
  
  return {
      feedbacksProps: state.commentsBlock,
      
  }
}

const FeedbacksContainer = connect(mapStateToProps, actionCreatorClick) ( Feedbacks);

export default FeedbacksContainer