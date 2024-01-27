import React from "react";
import { useParams } from "react-router-dom";
import Header from "../componets/Header";
import { blogItems } from "../config/config";
import TextBg from "../componets/TextBg";
const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const Blog = ({ setHide }) => {
  const { year, month, day } = useParams();
  setHide(true);
  var text;
  blogItems.map((item) =>
    parseInt(item.year) == parseInt(year) &&
    parseInt(item.month) == parseInt(month) &&
    parseInt(item.day) == parseInt(day)
      ? (text = item.item)
      : ""
  );

  return (
    <div>
      <Header />
      <TextBg>
        <h2 className=" text-5xl pb-3">
          {months[parseInt(month)] + "/" + day}
        </h2>
        <p className=" text-lg ">{text}</p>
      </TextBg>
    </div>
  );
};

export default Blog;
