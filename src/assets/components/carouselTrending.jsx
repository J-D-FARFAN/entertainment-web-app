import { Categorys } from "./categorys";
import { useEffect, useState } from "react";
import IconFavorite from "./iconComponents/iconFavorite";
import IconPlay from "../icons/icon-play.svg";
import "../styles/carousel.css";

export function CarouselTrending({
  NameMovie,
  year,
  rating,
  category,
  imagePresentationMovie,
  nameMoviesIsNotTrending,
  isTrending,
  dataIsBookmarked,
}) {
  const [favorite, setFavorite] = useState(dataIsBookmarked);

  useEffect(() => {
    setFavorite(dataIsBookmarked);
  }, [dataIsBookmarked]);

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <article className="bx-cardTrending">
        <section
          className="cardTrending"
          style={{ backgroundImage: `url(${imagePresentationMovie})` }}
        >
          <div className="darkness"></div>
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
              <IconFavorite
                classFavorite={`styleForIconFavorite ${
                  favorite ? "saveFavorite" : ""
                }`}
              />
            </div>

            {isTrending && (
              <>
                <div className="bx-infoMovie">
                  <Categorys year={year} category={category} rating={rating} />
                </div>
                <span className="nameMovie">{NameMovie}</span>
              </>
            )}
          </section>
        </section>

        {!isTrending && (
          <section className="bx-isNotTrending">
            <div className="bx-categoryNotTrending">
              <Categorys year={year} category={category} rating={rating} />
            </div>

            <span className="titleNotTrending">{nameMoviesIsNotTrending}</span>
          </section>
        )}
      </article>
    </>
  );
}
