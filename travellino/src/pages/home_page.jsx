import React from "react";
import { Link } from "react-router-dom";
import "./home_page.css";

const home_page = ()=> {
    return (
        <div className={"container"}>
            <header className={"navigbar"}>
                <h1 className={"logo"}>Travellino Cappuchino</h1>
                <nav className={"navigbar-links"}>
                    <Link to="/">Main</Link>
                    <Link to="/trip_list">Trips</Link>
                    <Link to="/profile">My profile</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/about">About us</Link>
                </nav>
            </header>
            <main className={"hero"}>
                <h2>Book your trip in a few clicks!</h2>
                <Link to="/trips" className={"button"}>Book a trip</Link>
            </main>
            <footer className="footer">
        © {new Date().getFullYear()} DevDivas.
      </footer>
        </div>


    );
};
export default home_page