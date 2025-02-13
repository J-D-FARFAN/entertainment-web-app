import React, { useState } from "react";
import avatar from "../../../public/image/image-avatar.png";
import iconApp from "../icons/logo.svg";
import IconNavHome from "./iconComponents/iconHome";
import IconNavMovies from "./iconComponents/iconMovies";
import IconNavTv from "./iconComponents/iconTv";
import IconNavBookmarker from "./iconComponents/iconBookmarker";
import "../styles/navbar.css";

export function NavbarAplication({ onCategoryChange }) {
  // Recibe la función onCategoryChange como argumento
  const [activeIndex, setActiveIndex] = useState(0); // Inicialmente, el primer elemento está activo

  const handleClick = (index, category) => {
    setActiveIndex(index);

    if (onCategoryChange) {
      onCategoryChange(category); // Llama a la función onCategoryChange con la categoría correspondiente
    }
  };

  return (
    <>
      <article className="allNavbar">
        <div className="bx-logo">
          <img src={iconApp} alt="" className="logo" />
        </div>

        <figure className="btns-navbar">
          <div
            className={`bx-icon-navbar ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleClick(0, "Home")} // Llama a la función handleClick con el índice y la categoría correspondiente
          >
            <IconNavHome colorActive={"colorIconsNavbar"} />
          </div>
          <div
            className={`bx-icon-navbar ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleClick(1, "Movies")} // Llama a la función handleClick con el índice y la categoría correspondiente
          >
            <IconNavMovies colorActive={"colorIconsNavbar"} />
          </div>
          <div
            className={`bx-icon-navbar ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleClick(2, "TV Series")} // Llama a la función handleClick con el índice y la categoría correspondiente
          >
            <IconNavTv colorActive={"colorIconsNavbar"} />
          </div>
          <div
            className={`bx-icon-navbar ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleClick(3, "Bookmarked")} // Llama a la función handleClick con el índice y la categoría correspondiente
          >
            <IconNavBookmarker colorActive={"colorIconsNavbar"} />
          </div>
        </figure>
        <div className="bx-image-avatar">
          <img src={avatar} alt="" className="avatar" />
        </div>
      </article>
    </>
  );
}
