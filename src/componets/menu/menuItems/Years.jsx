import React from "react";
import { blogItems } from "../../../config/config";
import { artItems } from "../../../config/config";
import { poetryItems } from "../../../config/config";

import { Link } from "react-router-dom";
const Years = ({ yearsFor }) => {
  var yearsSet = new Set();
  if (yearsFor === "blogMenu") {
    blogItems.map((item) => yearsSet.add(item.year));
  } else if (yearsFor === "artMenu") {
    artItems.map((item) => yearsSet.add(item.year));
  } else if (yearsFor === "poetryMenu") {
    poetryItems.map((item) => yearsSet.add(item.year));
  }
  var yearsArray = [...yearsSet];
  return (
    <div className="flex flex-wrap h-[80%] gap-y-4 justify-items-center place-content-center items-center  gap-x-4">
      {yearsArray.map((year, index) => (
        <Link
          key={index}
          to={`/${yearsFor}/${year}`}
          className="text-white hover:text-white text-3xl p-[1%] text-center rounded-3xl bg-slate-600 hover:bg-transparent cursor-pointer border border-transparent border-solid hover:border-[#d8ab49a8]"
        >
          {year}
        </Link>
      ))}
    </div>
  );
};

export default Years;
