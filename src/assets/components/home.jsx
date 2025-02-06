import { NavbarAplication } from "./navbar";
import iconSearch from "../icons/icon-search.svg";
import "../styles/home.css";
import { CarouselTrending } from "./carouselTrending";
import { useRef, useState } from "react";

export function HomeEntertainmentApp() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <article className="content__allHomeAplicaction">
        <nav className="content__sideNavbar-homeAplication">
          <NavbarAplication />
        </nav>

        <section className="content__homeAplication">
          <search className="search-movies">
            <div className="bx-icon-search">
              <img src={iconSearch} alt="" className="iconSearch" />
            </div>
            <input
              type="serch"
              placeholder="Search for movies or TV series"
              className="search-movies__input"
            />
          </search>

          <figure className="content__trendingHomeAplication">
            <span className="titles">Trending</span>

            <article
              className="content__carousel-trending"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />

              <CarouselTrending />
              <CarouselTrending />
              <CarouselTrending />
            </article>
          </figure>
        </section>
      </article>
    </>
  );
}
