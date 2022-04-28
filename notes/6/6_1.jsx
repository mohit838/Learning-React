import React from 'react';
import './Country.css';

const Country = (props) => {
    
    // console.log(props);

    return (
        <div className='single__Country'>
            <h2>Country: {props.name}</h2>
            <h3>Country: {props.capital}</h3>
        </div>
    );
};

export default Country;