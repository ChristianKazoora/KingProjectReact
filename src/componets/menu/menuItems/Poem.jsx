import React from "react";
import { poetryItems } from "../../../config/config";
import { useParams, Link } from "react-router-dom";

const Poem = () => {
  const link = useParams()["*"];
  var poemSet = new Set();
  var year = link;
  poetryItems.map(
    (item) => parseInt(item.year) == parseInt(year) && poemSet.add(item)
  );
  var poemArray = [...poemSet];

  return (
    <div className="flex flex-wrap  h-[80%] gap-y-4 justify-center justify-items-center place-content-center items-center  gap-x-4">
      {poemArray.map((poem, index) => (
        <Link
          key={index}
          to={`/poetryMenu/${link}/${poem.id}`}
          className="text-white hover:text-white text-3xl p-[2%] text-center rounded-2xl bg-slate-600 hover:bg-transparent cursor-pointer border border-transparent border-solid hover:border-[#d8ab49a8]"
        >
          {poem.title}
        </Link>
      ))}
    </div>
  );
};

export default Poem;
