// .single__Country {
//     text-align: center;
//     width: 50%;
//     margin: 20px auto;
//     padding: 10px;
//     background-color: antiquewhite;
//     border-radius: 5px solid black;
//     -webkit-border-radius: 5px solid black;
//     -moz-border-radius: 5px solid black;
//     -ms-border-radius: 5px solid black;
//     -o-border-radius: 5px solid black;
//   }
  
//   .flags {
//     width: 25%;
//   }
  
  
import React from 'react';
import './Country.css';

const Country = (props) => {

    //Destructuring
    
    const {name, capital, population, flag, flags} = props.country;
    
    // console.log(props);
    // console.log(props.country);

    return (
        <div className='single__Country'>
            {/* <h2>Country: {props.name}</h2>
            <h3>Capital: {props.capital}</h3>
            <p>Population: {props.population}</p> */}
            
            <h2>Country: {name.official}</h2>
            <img className='flags' src={flags.svg} alt={name.official}/>
            <h3>Capital: {capital}</h3>
            <p>Flag: {flag}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;