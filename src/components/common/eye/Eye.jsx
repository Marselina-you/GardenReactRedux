import React from 'react';
import s from './Eye.module.css'


const Eye = () => {
    return (
        <button className={s.btn}>
       <svg className={s.icon}>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#eye`}
                        />
                      </svg>
</button>
    );
};



export default Eye;