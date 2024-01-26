import React from 'react';



const Eye = () => {
    return (
        <button className='btnEllipce'>
       <svg>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#eye`}
                        />
                      </svg>
</button>
    );
};



export default Eye;