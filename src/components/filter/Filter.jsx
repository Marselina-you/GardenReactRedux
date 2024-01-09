import React from 'react';
import Select from '../common/select/Select';
import s from './Filter.module.css'

const Filter = () => {
    return (
        <div className={s.inner}>
        <div className={s.select__wrap}>
            <Select/>
           
        </div>
        </div>
    );
};


export default Filter;