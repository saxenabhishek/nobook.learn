import React from "react";

const Question = (props) => {
  return (
    <>
      <div
        className={`${props.class} p-5 flex justify-center items-center h-96 my-44 md:-mx-4`}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {props.ques}
          </h1>
          <input
            className="border p-5 shadow-lg rounded-lg my-10  border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="answer"
          ></input>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <button
                onClick={props.btn}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
