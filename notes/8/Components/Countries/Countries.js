import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);

    return (
        <div>
            <h1>All Countries API </h1>
            <h3>The length of array is:: {countries.length}</h3>
            
            <div className='countries__container'>
                {
                    countries.map(country => <Country 
                        key={country.capital}
                        country={country}
                    ></Country>) 
                }
            </div>
            
        </div>
    );
};

export default Countries;