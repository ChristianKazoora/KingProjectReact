import React from "react";
import Header from "../componets/Header";
import { artItems } from "../config/config";
import { Link, useParams } from "react-router-dom";
import ArtViewer from "../componets/ArtViewer";
const Art = ({ setHide }) => {
  setHide(true);
  const fullLink = useParams();
  const link = fullLink["*"];
  const year = fullLink.year;
  let artArray = [];
  artItems.map((item) => item.year == year && artArray.push(item));
  return (
    <div className="w-full h-full">
      <Header />
      <div className=" overflow-auto absolute mt-[8%] ml-[10%] w-[80%] h-[84%]">
        <div className="grid grid-cols-2 gap-[20%] place-items-center w-full h-full overflow-auto">
          {artArray.map((item) => (
            <Link
              to={`${item.id}`}
              className=" cursor-pointer transition-all ease-in-out hover:bg-none border border-transparent hover:border-[#e4aa68a2] bg-gradient-to-b from-[#e4aa68a2] rounded-3xl "
            >
              <img
                src={item.item}
                alt=""
                className="p-[2rem] w-[20rem] h-[20rem] object-cover object-center"
              />
            </Link>
          ))}
        </div>
      </div>
      {link.length > 0 && <ArtViewer artArray={artArray} id={link} />}
    </div>
  );
};

export default Art;
