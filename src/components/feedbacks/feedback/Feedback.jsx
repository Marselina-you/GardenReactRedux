import React from 'react';
import classes from './Feedback.module.css'


const Feedback = (props) => {
    return (
       
          <li className={classes.item}>
        <div className={classes.block}>
          <h3 className={classes.block__title}>
           {props.name}
          </h3>
          <blockquote className={classes.block__txt}>
           {props.content}
          </blockquote>
          <div className={classes.block__time}>
            <time>
              {props.time}
            </time>
          </div>
        </div>
      </li>
);
};



export default Feedback;