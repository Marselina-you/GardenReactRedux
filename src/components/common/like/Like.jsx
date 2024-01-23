import React from 'react';
import s from '../eye/Eye.module.css'


const Like = () => {
    return (
        <button className={s.btn}>
                <svg className={s.icon}>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#like`}
                        />
                      </svg>
                </button>
    );
};



export default Like;