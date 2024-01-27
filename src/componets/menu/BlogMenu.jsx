import React, { useState } from "react";
import MenuBg from "./MenuBg";
import Years from "./menuItems/Years";
import Months from "./menuItems/Months";
import Day from "./menuItems/Day";
import Header from "../Header";
import { useParams } from "react-router-dom";

const BlogMenu = ({ setActive, setHide }) => {
  const link = useParams()["*"];
  setHide(false);
  setActive(2);
  return (
    <div>
      <Header />
      <MenuBg>
        <h1 className=" text-white text-center">Blogs</h1>

        {!link && <Years yearsFor={"blogMenu"} />}
        {link.length === 4 && <Months />}
        {link.length === 7 && <Day />}
      </MenuBg>
    </div>
  );
};

export default BlogMenu;

// import React, { useState } from "react";
// import MenuBg from "./MenuBg";
// import Years from "./menuItems/Years";
// import Months from "./menuItems/Months";
// import Day from "./menuItems/Day";
// import Header from "../Header";
// import { useParams } from "react-router-dom";

// const BlogMenu = ({ setActive, setShowBlog }) => {
//   const [displayDays, setDisplayDays] = useState(false);
//   const [displayMonths, setDisplayMonths] = useState(false);
//   const link = useParams()["*"];
//   let blogPg = null;
//   if (link == "") {
//     blogPg = true;
//   } else {
//     blogPg = false;
//   }

//   // try {
//   //   blogPg = link;
//   // } catch (error) {}

//   console.log(blogPg);
//   setActive(2);
//   return (
//     <div>
//       <Header />
//       <MenuBg
//         setDisplayMonths={setDisplayMonths}
//         setDisplayDays={setDisplayDays}
//         displayDays={displayDays}
//       >
//         <h1 className="text-center">Blogs</h1>
//         {!displayMonths ? (
//           <Years yearsFor={"blog"} setDisplayMonths={setDisplayMonths} />
//         ) : !displayDays ? (
//           <Months setDisplayDays={setDisplayDays} />
//         ) : (
//           <Day />
//         )}
//       </MenuBg>
//     </div>
//   );
// };

// export default BlogMenu;

// import { React, useState } from "react";
// import MenuBg from "./MenuBg";
// import Years from "./menuItems/Years";
// import Months from "./menuItems/Months";
// const BlogMenu = ({ setBlogMenu, setActive }) => {
//   const [blogYear, setBlogYear] = useState(null);
//   const [blogMonth, setBlogMonth] = useState(null);

//   return (
//     <div>
//       <MenuBg setActive={setActive}>
//         <h1 className=" text-center">Blogs</h1>

//         <Years
//           className={`${blogYear ? "" : " hidden"}`}
//           yearsFor={"blog"}
//           setYear={setBlogYear}
//         />

//         <Months setMonth={setBlogMonth}></Months>
//       </MenuBg>
//     </div>
//   );
// };

// export default BlogMenu;
