import { NavbarAplication } from "./navbar";
import iconSearch from "../icons/icon-search.svg";
import "../styles/home.css";
import { CarouselTrending } from "./carouselTrending";

export function HomeEntertainmentApp() {
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

            <article className="content__carousel-trending">
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
