import './App.css';
import React, { useState } from 'react';
import renderCountry from './renderCountry.js';
import {searchCountry} from './searchCountry.js';




function App() {
    //use state for searchTerm (country name or code)
    const [searchTerm, setSearchTerm] = useState('');
    //country data returned by search function
    const [countryData, setCountryData] = useState(null);
    //Marker that the button was clicked (necessary to NOT display 
    //that nothing was found before the button was clicked
    const [searchExecuted, setSearchExecuted] = useState(null);

    //This function executes the search and marks that the button was clicked
    const executeSearch = async () => {
      try {
        const data = await searchCountry(searchTerm);
        setCountryData(data); // Update the state with the fetched data
        const searched = true;
        setSearchExecuted(searched); // Mark that the search button was clicked
      } catch (error) {
        console.error('Error searching and rendering country:', error);
      }
    };

    //Rendering the UI:
    return (
        <div className="App">
            <h1>Search country</h1>
            <div className="search_inpt">
                <input
                    className="input-field"
                    placeholder="Enter country name/code"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
            </div>
            <button className="search_btn" onClick={executeSearch} style={{ marginBottom: '20px' }}>
                Search
            </button>
             {/*renderCountry displays the information received from the backend */} 
            {searchExecuted && renderCountry(countryData)}
            
        </div>
    );
}

