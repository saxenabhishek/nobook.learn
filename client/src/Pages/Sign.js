import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

const Sign = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-gray-50">
        <div className=" p-5 flex justify-center items-center h-96 my-44 md:-mx-4">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl mx-2 text-center tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl">
              Sign Up
            </h1>
            <input
              className="w-full text-center  border py-5 px-28 shadow-lg rounded-lg mt-10 mb-2  border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              className="w-full text-center border py-5 px-28 shadow-lg rounded-lg mb-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              type="email"
              placeholder="email"
            ></input>
            <div className="flex">
              <input
                className="text-center border py-5 px-1 mr-2 shadow-lg mb-2  rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                type="number"
                placeholder="age"
              ></input>
              <input
                className="text-center border py-5 px-5 shadow-lg mb-2  rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                type="text"
                placeholder="Phone Number"
              ></input>
            </div>
            <input
              className="text-center border py-5 px-28 shadow-lg mb-2  rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              type="text"
              placeholder="School/College Name"
            ></input>
            <input
              className="w-full text-center  border py-5 px-28 shadow-lg rounded-lg mb-2  border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              type="text"
              placeholder="Password"
            ></input>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a href="/start2">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Submit
                  </button>
                </a>
              </div>
            </div>
            <h3 className="text-center mt-2 text-gray-600">
              Already a user?{" "}
              <a className="underline" href="/login">
                Login
              </a>
            </h3>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Sign;
