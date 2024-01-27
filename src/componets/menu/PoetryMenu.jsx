import React from "react";
import MenuBg from "./MenuBg";
import Years from "./menuItems/Years";
import Header from "../Header";
import Poem from "./menuItems/Poem";
import { useParams } from "react-router-dom";

const PoetryMenu = ({ setPoetryMenu, setActive, setHide }) => {
  const link = useParams()["*"];
  setHide(false);

  setActive(1);
  return (
    <div>
      <Header />
      <MenuBg setBack={setPoetryMenu}>
        <h1 className="text-white text-center">PoetryMenu</h1>
        {!link && (
          <Years yearsFor={"poetryMenu"} setPoetryMenu={setPoetryMenu} />
        )}
        {link.length === 4 && <Poem />}
      </MenuBg>
    </div>
  );
};

export default PoetryMenu;
