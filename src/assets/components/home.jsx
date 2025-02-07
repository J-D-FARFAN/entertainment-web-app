import { NavbarAplication } from "./navbar";
import iconSearch from "../icons/icon-search.svg";
import "../styles/home.css";
import { CarouselTrending } from "./carouselTrending";
import { useRef, useState } from "react";
import dataApp from "../../data/data.json";

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
          <article className="search-movies">
            <div className="bx-icon-search">
              <img src={iconSearch} alt="" className="iconSearch" />
            </div>
            <input
              type="search"
              placeholder="Search for movies or TV series"
              className="search-movies__input"
            />
          </article>

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
              {dataApp
                .filter((item) => item.isTrending) // Filtra solo los elementos que son tendencia
                .map((item, index) => {
                  // Mapea los elementos que son tendencia
                  return (
                    <div className="bx-cardCaousel" key={index}>
                      <CarouselTrending
                        year={item.year}
                        rating={item.rating}
                        category={item.category}
                        NameMovie={item.title}
                        imagePresentationMovie={item.thumbnail.trending.large}
                        isTrending={item.isTrending}
                      />
                    </div>
                  );
                })}
            </article>
          </figure>

          <article className="content_dashboardMovies">
            <h1 className="titles">Recommended for you</h1>

            <figure className="dashboardMovies">
              {dataApp
                .filter((item) => !item.isTrending) // Filtra solo los elementos que no son tendencia
                .map(
                  (
                    item,
                    index // Mapea los elementos que no son tendencia
                  ) => (
                    <div className="bx-cardDashboardMovies" key={index}>
                      <CarouselTrending
                        year={item.year}
                        rating={item.rating}
                        category={item.category}
                        NameMovie={item.title}
                        imagePresentationMovie={item.thumbnail.regular.large}
                        nameMoviesIsNotTrending={item.title}
                        isTrending={item.isTrending}
                      />
                    </div>
                  )
                )}
            </figure>
          </article>
        </section>
      </article>
    </>
  );
}
