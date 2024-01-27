import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogItems } from "../../../config/config";

const Day = () => {
  var daySet = new Set();
  const link = useParams()["*"];

  var year = link.substring(0, 4);
  var month = link.substring(5);
  blogItems.map((item) =>
    parseInt(item.year) == parseInt(year) &&
    parseInt(item.month) == parseInt(month)
      ? daySet.add(item.day)
      : ""
  );
  var dayArray = [...daySet];
  return (
    <div className="flex flex-wrap  h-[80%] gap-y-4 justify-center justify-items-center place-content-center items-center  gap-x-4">
      {dayArray.map((day, index) => (
        <Link
          key={index}
          to={`/blogMenu/${link}/${day}`}
          className="text-white hover:text-white text-3xl p-[2%] text-center rounded-2xl bg-slate-600 hover:bg-transparent cursor-pointer border border-transparent border-solid hover:border-[#d8ab49a8]"
        >
          {day}
        </Link>
      ))}
    </div>
  );
};

export default Day;
