import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country
    return (
        <div className='country bg-primary'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;