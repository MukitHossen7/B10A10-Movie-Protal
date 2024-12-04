import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { FiFilm } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-8">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 z-50  text-gray-700 text-base"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/allMovies">All Movies</NavLink>
              <NavLink to="/addMovies">Add Movies</NavLink>
              <NavLink to="/myFavorites">My Favorites</NavLink>
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <FiFilm className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">MoviePortal</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-gray-700 text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allMovies">All Movies</NavLink>
            <NavLink to="/addMovie">Add Movie</NavLink>
            <NavLink to="/myFavorites">My Favorites</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to="/login"
            className="py-2 px-2 lg:px-4 border border-indigo-600 rounded-lg text-base lg:text-lg font-medium flex items-center gap-1  "
          >
            <CiLogin />
            Login
          </Link>
          <Link
            to="/register"
            className="py-2 px-2 lg:px-4 border border-indigo-600 rounded-lg text-base lg:text-lg font-medium flex items-center gap-1"
          >
            <FaUserPlus />
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
