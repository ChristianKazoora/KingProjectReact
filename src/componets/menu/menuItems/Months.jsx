import React from "react";
import { blogItems } from "../../../config/config";
import { artItems } from "../../../config/config";
import { poetryItems } from "../../../config/config";
import { Link, useParams } from "react-router-dom";

const Months = ({}) => {
  var monthsSet = new Set();
  const year = useParams()["*"];
  blogItems.map((item) => (item.year == year ? monthsSet.add(item.month) : ""));
  var monthsArray = [...monthsSet];

  return (
    <div className="flex flex-wrap h-[80%] gap-y-4 justify-items-center place-content-center items-center  gap-x-4">
      {monthsArray.map((month, index) => (
        <Link
          key={index}
          to={`/blogMenu/${year}/${month}`}
          className="text-white hover:text-white text-3xl p-[1%] text-center rounded-3xl bg-slate-600 hover:bg-transparent cursor-pointer border border-transparent border-solid hover:border-[#d8ab49a8]"
        >
          {month}
        </Link>
      ))}
    </div>
  );
};

export default Months;
