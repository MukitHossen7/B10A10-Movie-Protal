import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 dark:bg-gray-900/50 text-black dark:text-white py-6 pt-10">
        <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8  text-center lg:text-start">
            <div>
              <h2 className="">
                <span className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  MoviePortal
                </span>
              </h2>

              <p className="text-sm mt-2">
                Explore, manage, and save your favorite movies effortlessly. A
                hub for movie lovers.
              </p>

              <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                <a href="https://github.com/MukitHossen7" target="_blank">
                  <FaGithub className="text-3xl" />
                </a>

                <a href="https://www.x.com" target="_blank">
                  <RiTwitterXFill className="text-3xl" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <img src={facebook} className="w-8 h-8"></img>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2 flex flex-col">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/allMovies" className="hover:underline">
                  All Movies
                </Link>
                <Link to="/addMovie" className="hover:underline">
                  Add Movie
                </Link>
                <Link to="/myFavorites" className="hover:underline">
                  My Favorites
                </Link>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="mt-3 text-sm">Email: mdmukit.dev@gmail.com</p>
              <p className="text-sm">Phone: +8801326153447</p>
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

          <div className="text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; 2026 Movie Portal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
