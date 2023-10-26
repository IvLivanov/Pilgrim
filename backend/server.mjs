import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(cors());

let fetchedData = []; // Store the fetched data

app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

// Fetch data and store it when the server starts
axios
  .get('https://restcountries.com/v3.1/all')
  .then((response) => {
    fetchedData = response.data;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

//The following code finds a cca2, cca3, ccn3 or name corresponding to the query
//It is assumed that country names and codes are unique
app.get('/country/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const matchingCountries = fetchedData.filter((c) => {
    const matches = [];

    if (c.cca2 && c.cca2.toLowerCase() === query) {
      matches.push('cca2');
    }
    if (c.cca3 && c.cca3.toLowerCase() === query) {
      matches.push('cca3');
    }
    if (c.ccn3 && c.ccn3.toLowerCase() === query) {
      matches.push('ccn3');
    }
    if (c.name && c.name.common && c.name.common.toLowerCase() === query) {
      matches.push('name.common');
    }
    if (c.name && c.name.official && c.name.official.toLowerCase() === query) {
      matches.push('name.official');
    }

    return matches.length > 0 ? { country: c, matches } : null;
  });

  if (matchingCountries.length > 0) {
    res.json(matchingCountries[0]); // Return the first matching country as a JSON object (see the assumption above)
  } else {
    res.status(404).json({ error: 'No matching country found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});