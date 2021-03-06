import React from "react";

const Question = (props) => {
    const[repbtn,setRepBtn]=React.useState('Report')
  return (
    <>
      <div
        className={`${props.class} p-5 flex justify-center items-center  my-5 md:mx-32`}
      >
       
    
        <div className="flex flex-col justify-center">

              <button
                onClick={()=>{setRepBtn('Reported')}}
                className="w-20 mb-5 focus:outline-none focus:bg-red-800 flex items-center justify-center px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-800 "
              >
                {repbtn}
              </button>
         
          <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-4xl">
            {props.ques}
          </h1>
          <input
            className="border p-5 shadow-lg rounded-lg my-10  border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="answer"
          ></input>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            {/* <div className="rounded-md shadow">
              <button
                onClick={props.btn}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Next
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;



