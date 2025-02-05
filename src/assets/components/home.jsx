import { NavbarAplication } from "./navbar";

export function HomeEntertainmentApp() {
  return (
    <>
      <article className="content__allHomeAplicaction">
        <nav className="content__sideNavbar-homeAplication">
          <NavbarAplication />
        </nav>

        <section className="content__homeAplication"></section>
      </article>
    </>
  );
}
