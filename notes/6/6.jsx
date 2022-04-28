import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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
            
            {/* {
                countries.map(country => console.log(country)) 
            } */}
            
            {
                countries.map(country => <Country name={country.name.official} capital={country.capital}></Country>) 
            }
            
        </div>
    );
};

export default Countries;