import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link
      to="/"
      className="hover:border-white hover:bg-none text-white hover:text-white border border-transparent fixed z-10 text-3xl cursor-pointer bg-gradient-to-b from-[#d8ab49a8] rounded-3xl w-[20%] ml-[40%] text-center  mt-12"
    >
      King Project
    </Link>
  );
};

export default Header;
