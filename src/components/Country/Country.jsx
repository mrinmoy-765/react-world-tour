import { useState } from 'react';
import './Country.css';

const Country = ({country,  handleVisitedCountry}) => {
    console.log(country)
    const {name,flags, population, area, cca3} = country;


    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited);
    }
 


    return (
        //conditional css
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}> 
            <h3 style={{color:visited? 'Purple' : 'Black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button className="button" onClick={() => handleVisitedCountry(country)}>Mark visited</button> <br />
            <button className="button" onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit this country.'}
        </div>
    );
};

export default Country;