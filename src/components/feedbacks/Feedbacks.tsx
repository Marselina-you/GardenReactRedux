import React from 'react';
import { CommentType } from '../../types/types';
import Feedback from './feedback/Feedback';
import classes from './Feedbacks.module.css'


type PropsType = {
  comments: Array<CommentType>
}
const Feedbacks: React.FC<PropsType> = ({comments}) => {
  let FeedbackItem =  comments.map( i => (<Feedback key={i.id} time={i.time} content={i.content} name={i.name} />))
    return (
        <section className={classes.feedback}>
           
  <div className={classes.container}>
    <ul className={classes.list}>
    {FeedbackItem}
    </ul>
  
  </div>
</section>

    );
};



export default Feedbacks;