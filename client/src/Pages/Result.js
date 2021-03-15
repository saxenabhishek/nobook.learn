import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

const Result = () => {
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-gray-50">
        <h1 className="text-2xl mx-2 mb-1 mt-5 text-center tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl">
         Results Arrived!
        </h1>
        
        <div className=" p-5 flex flex-col justify-center items-center lg:h-84 my-40 md:-mx-4">
       
          <div className="my-3 mx-10">
            
            <table class="rounded-t-lg m-5 w-6/7 mx-auto bg-gray-800 text-gray-200">
              <tr class="text-left border-b border-gray-300">
                <th class="px-4 py-3">Question</th>
                <th class="px-4 py-3">Accuracy %</th>
                <th class="px-4 py-3">Confidence level</th>
                <th class="px-4 py-3">Remembering Power</th>
              </tr>
              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Q1.</td>
                <td class="px-4 py-3">78</td>
                <td class="px-4 py-3">56</td>
                <td class="px-4 py-3">89</td>
              </tr>

              <tr class="bg-gray-700 border-b border-gray-600">
                <td class="px-4 py-3">Q2.</td>
                <td class="px-4 py-3">38</td>
                <td class="px-4 py-3">96</td>
                <td class="px-4 py-3">80</td>
              </tr>

              
             
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Result;
