import { useNavigate } from "react-router-dom";

export default function MenuBg({ children }) {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className=" fixed left-[25%] top-[25%] align-middle justify-center z-[3] h-[50%] w-[50%]  bg-slate-300 bg-opacity-50  rounded-2xl ">
      <button
        onClick={goBack}
        className="border border-transparent absolute top-6 left-6  bg-blue-500 text-white px-4 py-2 mb-4 hover:text-white hover:bg-transparent   hover:border-[bg-blue-500]"
      >
        Back
      </button>
      {children}
    </div>
  );
}

// import React from "react";

// export default function MenuBg({ setBack, setActive, children }) {
//   return (
//     <div className=" fixed left-[25%] top-[25%] align-middle justify-center z-[3] h-[50%] w-[50%]  bg-slate-300 bg-opacity-50  rounded-2xl ">
//       <button
//         onClick={() => {}}
//         className=" absolute top-6 left-6  bg-blue-500 text-white px-4 py-2 mb-4"
//       >
//         Back
//       </button>
//       {children}
//     </div>
//   );
// }
