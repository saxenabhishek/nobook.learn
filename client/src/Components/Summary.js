import React from "react";

const Summary = (props) => {
  return (
    <>
      <div
        className={`${props.class} p-5 flex flex-col justify-center items-center   my-10 md:-mx-4`}
      >
        <h1 className="lg:text-5xl text-2xl font-extrabold text-gray-900 ">
          We feel you should give this a read first?
        </h1>
        <div className="lg:p-20  p-5 rounded-lg my-10  border-2 border-indigo-500 lg:mx-32 mx-5 bg-gray-100">
          <p>{props.desc}</p>
        </div>
        <div className="mt-5 sm:mt-8 flex flex-col justify-center">
          <h1 className="text-2xl text-center tracking-tight font-bold text-gray-700 mb-3">
            Feel confident now?
          </h1>
          <div className="rounded-md shadow-lg">
            <button
              onClick={props.btn}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Let's Try the Previous Question again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
