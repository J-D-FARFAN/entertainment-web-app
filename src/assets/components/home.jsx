import { NavbarAplication } from "./navbar";
import { CarouselTrending } from "./carouselTrending";
import { useRef, useState } from "react";
import dataApp from "../../data/data.json";
import iconSearch from "../icons/icon-search.svg";
import "../styles/home.css";

export function HomeEntertainmentApp() {
  const carouselRef = useRef(null); // Referencia al contenedor del carrusel
  const [isDragging, setIsDragging] = useState(false); // Estado para saber si se está arrastrando el carrusel
  const [startX, setStartX] = useState(0); // Posición inicial del mouse
  const [scrollLeft, setScrollLeft] = useState(0); // Posición inicial del scroll
  const [selectedCategory, setSelectedCategory] = useState("Home"); // Estado para la categoría seleccionada
  const [search, setSearch] = useState([]); // Estado para la búsqueda
  const [isSearch, setIsSearch] = useState(false); // Estado para saber si se está realizando una búsqueda

  // Función que se ejecuta cuando se presiona el mouse
  const handleMouseDown = (e) => {
    setIsDragging(true); // Cambia el estado de arrastrando a verdadero
    setStartX(e.pageX - carouselRef.current.offsetLeft); // Obtiene la posición inicial del mouse
    setScrollLeft(carouselRef.current.scrollLeft); // Obtiene la posición inicial del scroll
  };

  // Función que se ejecuta cuando se mueve el mouse
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Si no se está arrastrando, no hace nada
    e.preventDefault(); // Previene el comportamiento por defecto del mouse
    const x = e.pageX - carouselRef.current.offsetLeft; // Obtiene la posición actual del mouse
    const walk = (x - startX) * 2; // Ajusta la velocidad del scroll
    carouselRef.current.scrollLeft = scrollLeft - walk; // Mueve el scroll
  };

  // Función que se ejecuta cuando se suelta el mouse
  const handleMouseUp = () => {
    // Función que se ejecuta cuando se suelta el mouse
    setIsDragging(false); // Cambia el estado de arrastrando a falso
  };

  const handleSearch = () => {
    // Función que se ejecuta cuando se realiza una búsqueda
    const search = document.querySelector(".search-movies__input").value; // Obtiene el valor del input de búsqueda

    if (search.trim() === "") {
      setIsSearch(false); // Cambia el estado de búsqueda a falso
      setSearch([]); // Limpia el estado de búsqueda
      return; // Retorna si la búsqueda está vacía
    }

    const filterData = dataApp.filter((item) => {
      // Filtra los elementos de acuerdo a la búsqueda
      return item.title.toLowerCase().includes(search.toLowerCase()); // Retorna solo los elementos que coinciden con la búsqueda
    });

    setIsSearch(true); // Cambia el estado de búsqueda a verdadero
    setSearch(filterData); // Muestra los elementos que coinciden con la búsqueda
    console.log(filterData); // Muestra los elementos que coinciden con la
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Cambia la categoría seleccionada
  };

  // Filtra los elementos de acuerdo a la categoría seleccionada
  const filterData = dataApp.filter((item) => {
    if (selectedCategory === "Home") {
      return true; // Retorna todos los elementos
    } else if (selectedCategory === "Movies") {
      // Filtra solo los elementos que son películas
      return item.category === "Movie"; // Retorna solo los elementos que son películas
    } else if (selectedCategory === "TV Series") {
      // Filtra solo los elementos que son series de TV
      return item.category === "TV Series"; // Retorna solo los elementos que son series de TV
    } else if (selectedCategory === "Bookmarked") {
      // Filtra solo los elementos que están marcados como favoritos
      return item.isBookmarked; // Retorna solo los elementos que están marcados como favoritos
    }

    return false; // Retorna falso si no se cumple ninguna de las condiciones anteriores
  });

  return (
    <>
      <article className="content__allHomeAplicaction">
        <nav className="content__sideNavbar-homeAplication">
          <NavbarAplication onCategoryChange={handleCategoryChange} />
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
              onChange={handleSearch}
            />
          </article>

          {
            // Muestra el carrusel solo si no se está realizando una búsqueda y la categoría seleccionada es "Home"
            !isSearch && selectedCategory === "Home" && (
              <>
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
                              imagePresentationMovie={
                                item.thumbnail.trending.large
                              }
                              isTrending={item.isTrending}
                            />
                          </div>
                        );
                      })}
                  </article>
                </figure>
              </>
            )
          }

          <article className="content_dashboardMovies">
            <h1 className="titles">
              {isSearch // Muestra el mensaje de búsqueda si se está realizando una búsqueda
                ? `Search result for "${
                    document.querySelector(".search-movies__input").value
                  }"`
                : selectedCategory === "Home"
                ? "Recommended for you"
                : selectedCategory}
            </h1>

            <figure className="dashboardMovies">
              {(isSearch ? search : filterData) // Filtra los elementos de acuerdo a la categoría seleccionada
                .filter((item) => !item.isTrending) // Filtra solo los elementos que no son tendencia
                .map((item, index) => (
                  <div className="bx-cardDashboardMovies" key={index}>
                    <CarouselTrending
                      year={item.year}
                      rating={item.rating}
                      category={item.category}
                      NameMovie={item.title}
                      imagePresentationMovie={item.thumbnail.regular.large}
                      nameMoviesIsNotTrending={item.title}
                      isTrending={item.isTrending}
                      dataIsBookmarked={item.isBookmarked}
                    />
                  </div>
                ))}
            </figure>
          </article>
        </section>
      </article>
    </>
  );
}
