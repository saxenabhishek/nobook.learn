import React from "react";

const Nav = () => (
  <div className="shadow-xl bg-gray-50">
    <div className="flex ">
      <div className="ml-20 my-10">
        <span className=" text-indigo-600 font-extrabold text-3xl rounded-3xl py-2 px-5 ">
          <a href="/">NoBook.learn</a>
        </span>
      </div>
      <div className="mx-2 my-12">
        <span className=" text-gray-700 rounded-3xl  py-2 px-5 ">
          <a href="/">Home</a>
        </span>
      </div>
      <div className="mx-2 my-12">
        <span className=" text-gray-700 rounded-3xl border-2 py-2 px-5 border-gray-200">
          <a href="/dash">Dashboard</a>
        </span>
      </div>
    </div>
  </div>
);

export default Nav;
