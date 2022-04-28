import React from 'react';
import { Storage } from '../../Utilities/Storage/Storage';

const Cosmetic = (props) => {
    const {name, price, gender, _id} = props.cosmetic;
    const handlePurchase = (id) =>{
        Storage(id);
    }
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Gender: {gender}</p>
            <p>ID: {_id} Price: ${price}</p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;