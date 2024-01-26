import React from 'react';

const Like = (props) => {
    return (
        <button className='btnEllipce' onClick={props.propsOnClick}>
                <svg>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#like`}
                        />
                      </svg>
                </button>
    );
};
export default Like;