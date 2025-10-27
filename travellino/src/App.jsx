import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";
import Layout from "./pages/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
