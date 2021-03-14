import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);

  const error = () =>
    toast.error("Oops! There was some error. Please try again", {
      position: "top-right",
      autoClose: 4995,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const success = () =>
    toast.success("Yasss! Posted sucessfully", {
      position: "top-right",
      autoClose: 4995,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function handleSelect(event) {
    setFile(event.target.files[0]);
  }

  const submitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("UniqueID", Math.random() * 100);
    formData.append("file", file);

    axios
      .post("http://127.0.0.1:8000/uploadfile/", formData)
      .then((res) => {
        success();
        setShow(true);
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center items-center h-96 my-44 md:-mx-4">
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-5">
              <span className="block xl:inline">Let's Start Learning!</span>
              <br />
              <p className="text-indigo-600 text-lg mt-5 mb-10">
                Upload a file related to the topic you want to study about
              </p>
            </h1>
            <form onSubmit={submitFile}>
              <div className="my-10 border-4 border-dashed border-gray-500 w-full bg-white h-44 px-6 flex items-center justify-center rounded-lg">
                {!file && (
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-400 hover:text-white">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Upload a File
                    </span>

                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      onChange={handleSelect}
                    />
                  </label>
                )}
                {file && <img src={`/${file.name}`} alt="img" />}
              </div>
              {file && (
                <div>
                  <div className="flex items-center bg-white pl-2 pr-4 py-2 rounded-lg my-5">
                    <div className="flex flex-col px-3 py-2">
                      <span className="text-gray-800 font-semibold">
                        {" "}
                        {file.name}
                      </span>

                      <span className="text-gray-800 py-1">
                        Size: {file.size} bytes
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div
                className={`${
                  show ? "block" : "hidden"
                } mt-5 sm:mt-8 sm:flex sm:justify-center`}
              >
                <div className="rounded-md shadow">
                  <button
                    type="submit"
                    onClick={props.btn}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Let's Go
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4995}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Upload;
