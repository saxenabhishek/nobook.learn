import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";
import booklover from "../images/booklover.gif";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-gray-50 ">
        <div className="p-5 flex flex-col lg:flex-row justify-center items-center h-96 my-44 md:-mx-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl mx-2 mb-5 text-center tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl">
              Log In
            </h1>

            <input
              className="w-full text-center border py-5 px-28 shadow-lg rounded-lg mb-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              type="email"
              placeholder="email"
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
              New user?{" "}
              <a className="underline" href="/signup">
                Sign Up
              </a>
            </h3>
          </div>
          <div className="mx-5">
            <img src={booklover} alt="book" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
