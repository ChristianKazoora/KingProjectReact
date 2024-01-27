import React from "react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";

const Homepage = ({ active, setActive, setHide }) => {
  setActive(null);
  setHide(false);
  return (
    <div className="h-full w-full">
      <Header />
      <div className=" absolute items-center justify-center h-screen text-[73%]">
        <Link
          to="/artMenu"
          className={`${
            active == null
              ? "cursor-pointer top-[28%]  left-[5%]  rounded-full fixed h-[43%] w-[27%] z-[1]"
              : " hidden"
          }`}
        >
          <h1 className="hover:border-white hover:bg-none text-white hover:text-white border border-transparent mt-[100%] text-center align-text-bottom bg-gradient-to-t from-[#d8ab49a8] rounded-[4rem]">
            Art
          </h1>
        </Link>
        <Link
          to="/poetryMenu"
          className={`${
            active == null
              ? "cursor-pointer top-[28%] left-[36.5%]  rounded-full fixed h-[43%] w-[27%]  z-[1]"
              : " hidden"
          }`}
        >
          <h1 className="hover:border-white hover:bg-none text-white hover:text-white border border-transparent mt-[100%] text-center align-text-bottom bg-gradient-to-t from-[#d8ab49a8] rounded-[4rem]">
            Poetry
          </h1>
        </Link>
        <Link
          className={`${
            active == null
              ? "cursor-pointer top-[28%] right-[3%]  rounded-full fixed h-[43%] w-[27%]  z-[1]"
              : " hidden"
          }`}
          to="/blogMenu"
        >
          <h1 className="hover:border-white hover:bg-none text-white hover:text-white border border-transparent mt-[100%] text-center align-text-bottom bg-gradient-to-t from-[#d8ab49a8] rounded-[4rem]">
            Blog
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
