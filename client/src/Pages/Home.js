import React, { useState } from "react";
import Footer from "../Components/Footer";
import kids from "../images/kids.gif";
import kids2 from "../images/kids2.gif";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="sr-only">NoBook.learn</span>
                
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        onClick={() => setToggle(true)}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span className="sr-only">open</span>
                        <svg
                          className="h-6 w-6"
                          x-description="Heroicon name: outline/menu"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a
                    href="/"
                    className="text-indigo-600 font-extrabold text-3xl rounded-3xl py-2 pr-5"
                  >
                    NoBook.learn
                  </a>
                  <a
                    href="/signup"
                    className="font-medium text-gray-500 rounded-xl border-2 border-gray-100 hover:border-gray-700 p-2 hover:text-gray-900"
                  >
                    Get Started
                  </a>
                </div>
                <div
                  id="google_translate_element"
                  className="bg-indigo-200 p-2"
                ></div>
              </nav>
            </div>

            <div
              className={`${
                toggle ? "block" : "hidden"
              } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-100 ease-in opacity-100 scale-100`}
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setToggle(false)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close main menu</span>

                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 my-5 space-y-1">
                  <a
                    href="/signup"
                    className="font-medium text-center text-gray-500 rounded-xl border-2 border-gray-100 hover:border-gray-700 p-2 hover:text-gray-900"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">NoBook.learn</span>
                  <br />
                  <p className="block text-indigo-600 xl:inline text-lg my-5">
                    Learning for Everyone
                  </p>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  It is often a tedious process to read through a large piece of
                  literature where the true agenda is hidden deep in the text.
                  Hence, we "NoBook.learn", make learning more interactive by
                  continuously iterating through simplified versions of the same
                  literature and evaluating along the way through interactive
                  questions. We plan to make two-interfaces, one in which we
                  allow the user to upload the literature of their choice and
                  another where we ask interactive questions based on that.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover h-96 w-full lg:h-full"
            src={kids}
            alt="kids"
          />
        </div>
      </div>
      <section className="py-10 bg-gray-50">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center m-5 lg:m-15 flex-col">
            <h1 className="mx-10 lg:mx-20 text-indigo-600 text-2xl font-semibold">
              How we Help?
            </h1>
            <ul className="leading-loose list-inside list-disc m-10 lg:my-10 lg:mx-20 text-gray-700 font-extralight">
              <li>
                It is often a tedious process to read through a large piece of
                literature where the true agenda is hidden deep in the text.
              </li>
              <li>
                Hence, we "NoBook.learn", make learning more interactive by
                continuously iterating through simplified versions of the same
                literature and evaluating along the way through interactive
                questions.
              </li>
              <li>
                We plan to make two-interfaces, one in which we allow the user
                to upload the literature of their choice and another where we
                ask interactive questions based on that.
              </li>
            </ul>
          </div>
          <div>
            <img src={kids2} alt="kids" className="mr-5" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
