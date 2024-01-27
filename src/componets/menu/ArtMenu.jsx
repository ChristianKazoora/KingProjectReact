import React from "react";
import MenuBg from "./MenuBg";
import Years from "./menuItems/Years";
import Header from "../Header";
const ArtMenu = ({ setArtMenu, setActive, setHide }) => {
  setHide(false);
  setActive(0);
  return (
    <div>
      <Header />
      <MenuBg setBack={setArtMenu}>
        <h1 className="text-white text-center">ArtMenu</h1>
        <Years yearsFor={"artMenu"} setArtMenu={setArtMenu} />
      </MenuBg>
    </div>
  );
};

export default ArtMenu;
