import React, { useState } from "react";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Navbar";
import Upload from "../Components/Upload";
import Question from "../Components/Question";
import Summary from "../Components/Summary";

const Start = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  return (
    <>
      <Nav />
      <div className="overflow-hidden bg-gray-50 p-5">
        <div
          className={`${
            toggle2 ? "block" : "hidden"
          } flex flex-col justify-center`}
        >
          <Upload
            btn={() => {
              setToggle(true);
              setToggle2(false);
            }}
          />
        </div>

        <Question
          ques="Who is the powerhouse of the cell?"
          class={`${toggle ? "block" : "hidden"}`}
          btn={() => {
            setToggle3(true);
            setToggle(false);
          }}
        />

        <Summary
          btn={() => {
            setToggle(true);
            setToggle3(false);
          }}
          class={`${toggle3 ? "block" : "hidden"}`}
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
    </>
  );
};

export default Start;
