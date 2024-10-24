import React from 'react';
import './Header.css'
const Bottle = ({bottle}) => {
const {name, img, price} = bottle



    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;