import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";
import Chartt from "../Components/Chart";

const Dash = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-gray-50">
        <h1 className="text-2xl mx-2 mb-10 text-center tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl">
          DashBoard
        </h1>
        <p class="text-2xl text-center font-bold m-5 bg-indigo-100 lg:mx-96">
              Your detailed Perfomance Analysis
            </p>
        <div className=" p-5 flex flex-col lg:flex-row  justify-center items-center lg:h-96 my-40 md:-mx-4 bg-">
        <div>
        <p class="text-lg text-center font-bold m-5">
              Yearly Perfomance Analysis
            </p>
          <Chartt />
        </div>
          <div className="my-5 mx-10">
            <p class="text-lg text-center font-bold m-5">
              Past Perfomance Analysis
            </p>
            <table class="rounded-t-lg m-5 w-6/7 mx-auto bg-gray-800 text-gray-200">
              <tr class="text-left border-b border-gray-300">
                <th class="px-4 py-3">Topic</th>
                <th class="px-4 py-3">Accuracy %</th>
                <th class="px-4 py-3">Confidence level</th>
                <th class="px-4 py-3">Remembering Power</th>
              </tr>
              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Cell</td>
                <td class="px-4 py-3">78</td>
                <td class="px-4 py-3">56</td>
                <td class="px-4 py-3">89</td>
              </tr>

              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Light</td>
                <td class="px-4 py-3">38</td>
                <td class="px-4 py-3">96</td>
                <td class="px-4 py-3">80</td>
              </tr>

              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Waves</td>
                <td class="px-4 py-3">98</td>
                <td class="px-4 py-3">86</td>
                <td class="px-4 py-3">99</td>
              </tr>
              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Plants</td>
                <td class="px-4 py-3">28</td>
                <td class="px-4 py-3">56</td>
                <td class="px-4 py-3">69</td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dash;
