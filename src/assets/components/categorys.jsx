import iconCategory from "../icons/icon-category-movie.svg";
import "../styles/categorys.css";

export function Categorys({ year, category, rating }) {
  return (
    <>
      <article className="content__categoryMovies">
        <span className="years">{year}</span>

        <span className="circles"></span>

        <div className="bx-category">
          <span className="bx-iconCategory">
            <img src={iconCategory} alt="" className="iconCategory" />
          </span>
          <span className="category">{category}</span>
        </div>

        <span className="circles"></span>

        <span className="rating">{rating}</span>
      </article>
    </>
  );
}
