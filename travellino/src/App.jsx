import { useEffect, useState } from 'react';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch('http://localhost:8000/countries/');
      const data = await res.json();
      setCountries(data);
    }
    getCountries();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  );
}

export default CountriesList;
