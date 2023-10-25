import React from 'react';
import './App.css';

function renderCountry(countryData) {
  if (countryData) {
    
    return (
        <div className="country-data">
        <h2>Country Data</h2>
        <img className = "countryImage"
            src={countryData.flags?.png}
            alt={`Flag of ${countryData.name?.common}`}
        />
        <p><strong>Common Name:</strong> {countryData.name?.common}</p>
        <p><strong>Official Name:</strong> {countryData.name?.official}</p>
        <p><strong>Country codes: </strong>{countryData.cca2}; {countryData.cca3}; {countryData.ccn3}</p>
        <p><strong>Capital:</strong> {countryData.capital?.[0]}</p>
        <p><strong>Continent: </strong> {countryData.continents}</p>
        <p><strong>Region:</strong> {countryData.subregion}</p>
        <p><strong>Maps:</strong></p>
        <ul>
            {Object.keys(countryData.maps).map((key) => (
            <li key={key}>
            {key}: <a href={countryData.maps[key]} target="_blank" rel="noopener noreferrer">
            {countryData.maps[key]}
            </a>
            </li>
            ))}
          </ul>
        <p><strong>Population:</strong> {countryData.population}</p>

   
        <p><strong>Currency:</strong></p>
<ul>
  {Object.entries(countryData.currencies).map(([code, currency]) => (
    <li key={code}>
      {code}: {currency.name} ({currency.symbol})
    </li>
  ))}
</ul>

        <p>  <a href='https://data.worldbank.org/indicator/SI.POV.GINI'><strong>Gini index: </strong></a> {Object.entries(countryData.gini).map(([year, value]) => (
         <span key={year}>
         {year}: {value}
         <br />
         </span>
           ))}
        </p>
        <p><strong>Fifa code: </strong> {countryData.fifa}</p>
        <p><strong>Road rules: </strong> </p>
       <p>Cars move on the {countryData.car.side} side and plates code is: {countryData.car.signs} </p>
        <p><strong>Time zones: </strong> {countryData.timezones}</p>
    </div>
    );
  } else {
    return <p>No country with matching code or name found</p>;
  }
}

export default renderCountry;