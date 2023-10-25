export async function searchCountry(searchTerm) {
    try {
        //Query backend
        const response = await fetch(`http://localhost:3001/country/${searchTerm}`);
        
        if (!response.ok) {
            throw new Error('Network response error');
        }
        //Set and return data
        const data = await response.json();
        console.log('data found');
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}