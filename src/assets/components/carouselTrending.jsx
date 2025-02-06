import { Categorys } from "./categorys";
import { useState } from "react";
import IconFavorite from "./iconComponents/iconFavorite";
import IconPlay from "../icons/icon-play.svg";
import "../styles/carousel.css";

export function CarouselTrending() {
  const [favorite, setFavorite] = useState("");

  const handleClickFavorite = () =>
    setFavorite(!favorite ? "saveFavorite" : "");

  return (
    <>
      <article className="bx-cardTrending">
        <article className="content_wacthMovie">
          <figure className="containerPlay">
            <div className="bx-iconPlay">
              <img src={IconPlay} alt="Icon Play" className="iconPlay" />
            </div>

            <span className="textPlay">Play</span>
          </figure>
        </article>

        <section className="infoDescription-movie">
          <div className="bx-icon-favorite" onClick={handleClickFavorite}>
            <IconFavorite classFavorite={`styleForIconFavorite ${favorite}`} />
          </div>

          <div className="bx-infoMovie">
            <Categorys />
          </div>
          <span className="nameMovie">Beyond Earth</span>
        </section>
      </article>
    </>
  );
}
