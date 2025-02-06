import iconCategory from "../icons/icon-category-movie.svg";
import "../styles/categorys.css";

export function Categorys() {
  return (
    <>
      <article className="content__categoryMovies">
        <span className="years">2019</span>

        <span className="circles"></span>

        <div className="bx-category">
          <span className="bx-iconCategory">
            <img src={iconCategory} alt="" className="iconCategory" />
          </span>
          <span className="category">Movie</span>
        </div>

        <span className="circles"></span>

        <span className="rating">PG</span>
      </article>
    </>
  );
}
