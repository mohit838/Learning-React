import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, population, flag, flags} = props.country;
    
    // console.log(props.country);

    return (
        <div className='single__Country'>
            <h2>Country: {name.official}</h2>
            <img className='flags' src={flags.svg} alt={name.official}/>
            <h3>Capital: {capital}</h3>
            <p>Flag: {flag}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;