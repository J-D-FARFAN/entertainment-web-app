import avatar from "../../../public/image/image-avatar.png";
import iconApp from "../icons/logo.svg";
import IconNavHome from "./iconComponents/iconHome";
import IconNavMovies from "./iconComponents/iconMovies";
import IconNavTv from "./iconComponents/iconTv";
import IconNavBookmarker from "./iconComponents/iconBookmarker";

export function NavbarAplication() {
  return (
    <>
      <article className="allNavbar">
        <section className="controllsNavbar">
          <div className="bx-logo">
            <img src={iconApp} alt="" className="logo" />
          </div>

          <figure className="btns-navbar">
            <div className="bx-icon-navbar">
              <IconNavHome />
            </div>
            <div className="bx-icon-navbar">
              <IconNavMovies />
            </div>
            <div className="bx-icon-navbar">
              <IconNavTv />
            </div>
            <div className="bx-icon-navbar">
              <IconNavBookmarker />
            </div>
          </figure>
        </section>
        <div className="bx-image-avatar">
          <img src={avatar} alt="" className="avatar" />
        </div>
      </article>
    </>
  );
}
