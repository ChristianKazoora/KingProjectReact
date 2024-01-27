import React from "react";
import TextBg from "../componets/TextBg";
import Header from "../componets/Header";
import { useParams } from "react-router-dom";
import { poetryItems } from "../config/config";
const Poetry = ({ setHide }) => {
  const { year, id } = useParams();

  setHide(true);
  var poemItem = null;
  poetryItems.map(
    (item) => parseInt(item.id) == parseInt(id) && (poemItem = item)
  );

  return (
    <div className=" ">
      <Header />
      <TextBg>
        <div className="text-center">
          <h2 className=" text-5xl pb-3">{poemItem.title}</h2>
          <p className=" text-lg ">{poemItem.item}</p>
        </div>
      </TextBg>
    </div>
  );
};

export default Poetry;
