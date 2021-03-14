import React from "react";

const Footer = () => (
  <footer className="flex flex-col items-center justify-between px-6 py-2 bg-indigo-50">
    <p className="py-2 text-gray-600 dark:text-white sm:py-0">
      Made with ☕ by team
      <span className="text-xl font-bold text-gray-700 ">
        &nbsp;{" "}
        <span className="border-b-2 border-dotted border-indigo-600">
          async-await
        </span>
      </span>
    </p>
    <p className="my-2 text-gray-800 dark:text-white sm:py-0 font-thin">
      &copy; All rights reserved | 2021
    </p>
  </footer>
);

export default Footer;
