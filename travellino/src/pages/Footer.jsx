import React from "react";
import logo from "../res/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-auto">
      <div className="max-w-screen-xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <a href="/" className="flex items-center mb-4 md:mb-0">
            <img
              src={logo}
              alt="Travellino Logo"
              className="h-8 w-auto mr-3"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Travellino
            </span>
          </a>

      <ul className="flex flex-wrap justify-center items-center mb-4 text-sm font-medium">
            <li>
              <a href="/" className="mr-4 hover:text-blue-500 md:mr-6 transition-colors">
                Main
              </a>
            </li>
            <li>
              <a href="/countries" className="mr-4 hover:text-blue-500 md:mr-6 transition-colors">
                Countries
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition-colors">
                About us
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2025 Travellino. All rights are reserved.
        </span>
      </div>
    </footer>
  );
}

