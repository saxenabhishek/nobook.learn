import React, { useState } from "react";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Navbar";
import Question from "../Components/Question";
import Summary from "../Components/Summary";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Start = () => {
  const [ques, setQuestion] = useState(false);
  const [uploader, setUpload] = useState(true);
  const [summary, setSummary] = useState(false);
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

  const newid=uuidv4();

  const submitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("UID", `${newid}`);
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
      <Nav />
      <div className="overflow-hidden bg-gray-50 p-5">
        <div
          className={`${
            uploader ? "block" : "hidden"
          } flex flex-col justify-center`}
        >
          <div>
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
                }`}
              >
              <div
                className='mt-5 sm:mt-8 sm:flex sm:justify-center hidden'
              >
                <div className="rounded-md shadow">
                  <button
                    type="submit"
               onClick={() => {
                setQuestion(true);
                setUpload(false);
              }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Let's Go
                  </button>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

          </div>
        </div>

        <Question
          ques="Who is the powerhouse of the cell?"
          class={`${ques ? "block" : "hidden"}`}
          btn={() => {
            setSummary(true);
            setQuestion(false);
          }}
        />

        <Summary
          btn={() => {
            setQuestion(true);
            setSummary(false);
          }}
          class={`${summary ? "block" : "hidden"}`}
          desc="A cell is the structural and fundamental unit of life. The study of
            cells from its basic structure to the functions of every cell
            organelle is called Cell Biology. Robert Hooke was the first
            Biologist who discovered cells. All organisms are made up of cells.
            They may be made up of a single cell (unicellular), or many cells
            (multicellular). Mycoplasmas are the smallest known cells. Cells are
            the building blocks of all living beings. They provide structure to
            the body and convert the nutrients taken from the food into energy.
            Cells are complex and their components perform various functions in
            an organism. They are of different shapes and sizes, pretty much
            like bricks of the buildings. Our body is made up of cells of
            different shapes and sizes. Cells are the lowest level of
            organisation in every life form. From organism to organism, the
            count of cells may vary. Humans have the number of cells compared to
            that of bacteria. Cells comprise several cell organelles that
            perform specialised functions to carry out life processes. Every
            organelle has a specific structure. The hereditary material of the
            organisms is also present in the cells."
        />
      </div>
      <Footer />
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

export default Start;
