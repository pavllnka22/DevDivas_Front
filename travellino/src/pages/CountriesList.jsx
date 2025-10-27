import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("http://localhost:8000/countries/");
      const data = await res.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Countries</h1>
      <ul className="space-y-2">
        {countries.map(country => (
          <li key={country.id}>
            <Link className="hover:underline" to={`/country/${country.id}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
