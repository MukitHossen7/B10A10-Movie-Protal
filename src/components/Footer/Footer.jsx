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

      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Website Info */}
            <div>
              <h2 className="text-xl font-bold">Movie Portal</h2>
              <p className="text-sm mt-2">
                Explore, manage, and save your favorite movies effortlessly. A
                hub for movie lovers.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/all-movies" className="hover:underline">
                    All Movies
                  </a>
                </li>
                <li>
                  <a href="/add-movie" className="hover:underline">
                    Add Movie
                  </a>
                </li>
                <li>
                  <a href="/favorites" className="hover:underline">
                    My Favorites
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="mt-3 text-sm">Email: support@movieportal.com</p>
              <p className="text-sm">Phone: +1 (123) 456-7890</p>
              <div className="flex space-x-4 mt-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Movie Portal. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
