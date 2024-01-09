import React from 'react';
import s from '../eye/Eye.module.css'


const Like = () => {
    return (
        <button className={s.btn}>
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5555 3.26091C21.6308 3.26091 24.1211 5.94223 24.1211 9.24755C24.1211 15.2342 18.5555 18.6429 12.997 24.6296C7.43793 18.6429 1.87891 15.2342 1.87891 9.2476C1.87891 5.94229 4.36922 3.26096 7.43793 3.26096C10.2172 3.26096 11.6071 4.75776 12.997 7.7508C14.3863 4.75776 15.7762 3.26091 18.5555 3.26091Z" fill="#FF7979"/>
</svg>
                </button>
    );
};



export default Like;