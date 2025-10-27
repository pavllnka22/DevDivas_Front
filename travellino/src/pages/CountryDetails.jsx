import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      const res = await fetch(`http://localhost:8000/countries/${id}/`);
      const data = await res.json();
      setCountry(data);
    }
    fetchCountry();
  }, [id]);

  if (!country) return <div>Loading countries...</div>;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>{country.description}</p>
      <p>Currency: {country.currency}</p>
      {country.flag_url && (
        <img src={country.flag_url} alt={`flag of ${country.name}`} width="200" />
      )}
    </div>
  );
}
