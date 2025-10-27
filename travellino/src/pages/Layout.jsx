import React from "react";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="flex-1 max-w-screen-lg mx-auto p-6 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

