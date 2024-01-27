import { React, useState } from "react";
import Stars from "../componets/stars/StarsCanvas";
import Globe from "../componets/globe/Globe";
import { globeItems } from "../config/config";
import ArtMenu from "../componets/menu/ArtMenu";
import PoetryMenu from "../componets/menu/PoetryMenu";
import BlogMenu from "../componets/menu/BlogMenu";
import Homepage from "./Homepage";
import Blog from "./Blog";
import Art from "./Art";
import Poetry from "./Poetry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../componets/Header";

const Layout = () => {
  const [active, setActive] = useState(null);
  const [hide, setHide] = useState(false);

  return (
    <div className="h-full w-full  ">
      <Stars />
      {/* <Globe items={globeItems} active={active} hide={hide} /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                active={active}
                setActive={setActive}
                setHide={setHide}
              />
            }
          />
          <Route path="placeHolder" element={<Header />} />
          <Route
            path="blogMenu/*"
            element={<BlogMenu setActive={setActive} setHide={setHide} />}
          />
          <Route
            path="blogMenu/:year/:month/:day"
            element={<Blog setHide={setHide} />}
          />

          <Route
            path="poetryMenu/*"
            element={<PoetryMenu setActive={setActive} setHide={setHide} />}
          />
          <Route
            path="poetryMenu/:year/:id"
            element={<Poetry setHide={setHide} />}
          />
          <Route
            path="artMenu/*"
            element={<ArtMenu setActive={setActive} setHide={setHide} />}
          />
          <Route path="artMenu/:year/*" element={<Art setHide={setHide} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
