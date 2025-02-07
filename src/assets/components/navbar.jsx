import React, { useState } from "react";
import avatar from "../../../public/image/image-avatar.png";
import iconApp from "../icons/logo.svg";
import IconNavHome from "./iconComponents/iconHome";
import IconNavMovies from "./iconComponents/iconMovies";
import IconNavTv from "./iconComponents/iconTv";
import IconNavBookmarker from "./iconComponents/iconBookmarker";
import "../styles/navbar.css";

export function NavbarAplication() {
  const [activeIndex, setActiveIndex] = useState(0); // Inicialmente, el primer elemento está activo

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <article className="allNavbar">
        <section className="controllsNavbar">
          <div className="bx-logo">
            <img src={iconApp} alt="" className="logo" />
          </div>

          <figure className="btns-navbar">
            <div
              className={`bx-icon-navbar ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleClick(0)}
            >
              <IconNavHome colorActive={"colorIconsNavbar"} />
            </div>
            <div
              className={`bx-icon-navbar ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <IconNavMovies colorActive={"colorIconsNavbar"} />
            </div>
            <div
              className={`bx-icon-navbar ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <IconNavTv colorActive={"colorIconsNavbar"} />
            </div>
            <div
              className={`bx-icon-navbar ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <IconNavBookmarker colorActive={"colorIconsNavbar"} />
            </div>
          </figure>
        </section>
        <div className="bx-image-avatar">
          <img src={avatar} alt="" className="avatar" />
        </div>
      </article>
    </>
  );
}
