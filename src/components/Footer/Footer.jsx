import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gray-100 p-10">
        <nav className="">
          <aside className="pb-4">
            <Link to="/" className="font-semibold text-lg lg:text-3xl ">
              <span>MOVIE PORTAL</span>
            </Link>
          </aside>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/allMovies">All Movies</Link>
            <Link to="/addMovie">Add Movie</Link>
            <Link to="/myFavorites">My Favorites</Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/MukitHossen7" target="_blank">
              <FaGithub className="text-3xl" />
            </a>

            <a href="https://www.x.com" target="_blank">
              <RiTwitterXFill className="text-3xl" />
            </a>
          </div>

          <div className="">
            <p className="text-sm pt-7">
              © 2026 Eco-Adventure Experiences. All rights reserved.
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
