import React, { useState } from "react";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Navbar";
import Question2 from "../Components/Question2";
import Summary from "../Components/Summary";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Start2 = () => {
  const [ques, setQuestion] = useState(false);
  const [quesnext, setQuestionnext] = useState(false);
  const [uploader, setUpload] = useState(true);
  const [summary, setSummary] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [file, setFile] = useState(null);
  const [question1, setQues1] = useState('Loading...');
  const [question2, setQues2] = useState('Loading...');
  const [summarytext, setSummaryText] = useState(false);

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
    toast.info("Wait, Your Question will be here soon", {
      position: "top-right",
      autoClose: 4995,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    
    ;

  function handleSelect(event) {
    setFile(event.target.files[0]);
  }

  const newid=uuidv4();


  const getQues =()=>{
    axios
    .get(`http://127.0.0.1:8000/question/?UID=${newid}`) 
    .then(async(res) => {
    console.log(res.data.main[0].question)
    setQues1(res.data.main[0].question)
    setQues2(res.data.main[1].question)
    setLoading2(false);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const getSummary =()=>{
    axios
    .get(`http://127.0.0.1:8000/summary/?UID=${newid}`) 
    .then(async(res) => {
    console.log(res.data.sum[0].generated_text)
 setSummaryText(res.data.sum[0].generated_text)
    setLoading2(false);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  const submitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("UID", `${newid}`);
    formData.append("file", file);
    setLoading(true)

    axios
      .post("http://127.0.0.1:8000/uploadfile/", formData)
      
      .then(async(res) => {
        await success();
        await setLoading(false);
        await setUpload(false);
        await setQuestion(true);     
        await getQues();  
        await getSummary();  
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
                {file &&   <span className="text-gray-700 font-extrabold text-2xl">
                     
                        {file.name}
                      </span>}
              </div>
              {file && (
                <div>
                  <div className="flex items-center bg-white pl-2 pr-4 py-2 rounded-lg my-5">
                    <div className="flex flex-col px-3 py-2">
                      <span className="text-gray-800 font-semibold">
                        {" "}
                        {file.type}
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
                //   onClick={ ()=>{ setQuestion(true)     
                //      setUpload(false)}}
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                  {loading?'Loading...':"Submit"}   
               
                  </button>
                </div>
              </div>
              
               
            </form>
          </div>
        </div>
      </div>

          </div>
        </div>

      { loading2 ? <h1 className="text-6xl font-extrabold">Loading....</h1>

      : <Question2 ques={`${question1}`}
          class={`${ques ? "block" : "hidden"}`}
          btn={() => {
            setSummary(false);
            setQuestionnext(true);
            setQuestion(false)
          }}
        />
      
}
<Question2
             ques={`${question2}`}
          class={`${quesnext ? "block" : "hidden"}`}
          btn={() => {
            setSummary(true);
            setQuestionnext(false);
 }}        />
        <Summary
          btn={() => {
            setQuestionnext(true);
            setSummary(false);
          }}
          class={`${summary ? "block" : "hidden"}`}
          desc={`${summarytext}`}
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

export default Start2;
