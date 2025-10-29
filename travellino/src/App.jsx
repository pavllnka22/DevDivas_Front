import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";
import Layout from "./pages/Layout";
import React from "react";
import HomePage from "./pages/home_page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
