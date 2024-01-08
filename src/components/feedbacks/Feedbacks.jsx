import React from 'react';
import Feedback from './feedback/Feedback';
import classes from './Feedbacks.module.css'



const Feedbacks = () => {
  const feedbacksData = [
    {id: 1, nameFeed: 'Светлана Андреева', content: 'Собирала букет для учительницы - очень оригинально получилось, а главное -душой!', time: '23.11.2022'},
    {id: 2, nameFeed: 'Миша Андреев', content: 'Все супер', time: '22.11.2022'}
  ]
    return (
        <section className={classes.feedback}>
           
  <div className={classes.container}>
    <ul className={classes.list}>
    <Feedback name="Светлана Андреева" content=" Собирала букет для учительницы - очень
            оригинально получилось, а
            главное -
            с душой!" time="20.11.2022"/>
    <Feedback name="Миша Андреева" content="" time="23.11.2022"/>
    </ul>
  
  </div>
</section>

    );
};



export default Feedbacks;