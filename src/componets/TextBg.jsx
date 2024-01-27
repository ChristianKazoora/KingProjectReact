import React from "react";
import { useNavigate } from "react-router-dom";

const TextBg = ({ children }) => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className=" absolute  text-white p-[3rem]  pl-[7rem]  pr-[7rem] ml-[20%] mt-[9%] overflow-auto bg-gradient-to-b from-[#d8ab49a8] rounded-2xl h-[80%] w-[60%]">
        <button
          onClick={goBack}
          className=" fixed top-[19%] left-[20.5%] border border-transparent  bg-blue-500 text-white px-4 py-2 mb-4 hover:text-white hover:bg-transparent   hover:border-[bg-blue-500]"
        >
          Back
        </button>
        {children}
      </div>
    </div>
  );
};

export default TextBg;
