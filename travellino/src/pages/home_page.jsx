import React from "react";
import { Link } from "react-router-dom";
import "./home_page.css";
import logo from "../res/logo.png";
import CountriesList from "./CountriesList.jsx";
import CountryDetails from "./CountryDetails.jsx";


const home_page = ()=> {
    return (
        <div className={"container"}>
            <header className={"navigbar"}>
                  <img
              src={logo}
              alt="Travellino Logo"
              className="h-8 w-auto mr-3"
            />
                <h1 className={"logo"}>Travellino Cappuchino</h1>
                <nav className={"navigbar-links"}>
                    <Link to="/">Main</Link>
                    <Link to="/trip_list">Trips</Link>
                    <Link to="/profile">My profile</Link>
                    <Link to="/countries">Countries</Link>
                    <Link to="/about">About us</Link>
                </nav>
            </header>
            <main className={"hero"}>
                <h2>Book your trip in a few clicks!</h2>
                <Link to="/trips" className={"button"}>Book a trip</Link>
            </main>
            <footer className="footer">
                   <ul className="flex flex-wrap justify-center items-center mb-4 text-sm font-medium">
            <li>
              <a href="/contacts" className="mr-4 hover:text-blue-500 md:mr-6 transition-colors">
                Contacts
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition-colors">
                About us
              </a>
            </li>
          </ul>
        © {new Date().getFullYear()} DevDivas.
      </footer>
        </div>


    );
};
export default home_page