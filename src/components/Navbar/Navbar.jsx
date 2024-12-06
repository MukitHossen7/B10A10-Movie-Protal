import { useContext, useEffect } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FiFilm } from "react-icons/fi";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { BiUserPlus } from "react-icons/bi";
import ThemeControl from "../ThemeControl/ThemeControl";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const title = {
      "/": "Home || MoviePortal",
      "/allMovies": "All Movies || MoviePortal",
      "/addMovie": "Add Movies || MoviePortal",
      "/myFavorites": "Add Favorites || MoviePortal",
      "/login": "Log In || MoviePortal",
      "/register": "Register || MoviePortal",
    };
    if (matchPath("/details/:id", location.pathname)) {
      title[location.pathname] = "Movie Details || MoviePortal";
    }
    if (matchPath("/update/:id", location.pathname)) {
      title[location.pathname] = "Update Movie || MoviePortal";
    }
    document.title = title[location.pathname] || "Movie Portal";
  }, [location]);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 shadow ">
      <div className="navbar dark:text-white py-7 w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 z-50 text-base dark:text-white dark:bg-gray-800"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/allMovies">All Movies</NavLink>
              {user && (
                <div className="flex flex-col gap-3">
                  <NavLink to="/addMovie">Add Movies</NavLink>
                  <NavLink to="/myFavorites">My Favorites</NavLink>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 lg:space-x-2">
            <FiFilm className=" h-6 w-6 lg:h-8 lg:w-8 text-indigo-600" />
            <span className="text-lg lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              MoviePortal
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allMovies">All Movies</NavLink>
            {user && (
              <div className="flex items-center gap-8">
                <NavLink to="/addMovie">Add Movies</NavLink>
                <NavLink to="/myFavorites">My Favorites</NavLink>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="text-xs">
            <ThemeControl />
          </div>
          {user ? (
            <div className="flex items-center gap-1 lg:gap-4">
              <div className="tooltip" data-tip={`${user?.displayName}`}>
                <img
                  className="w-7 lg:w-8 h-7 lg:h-8 object-cover rounded-full"
                  src={user?.photoURL}
                ></img>
              </div>
              <button
                onClick={handleLogOut}
                className="py-1 px-1 lg:px-2 border border-indigo-600 rounded-lg text-base lg:text-lg flex items-center gap-1"
              >
                <CiLogout />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 lg:gap-4">
              <Link
                to="/login"
                className="py-1 px-1 lg:px-2 border border-indigo-600 rounded-lg text-base lg:text-lg flex items-center gap-1"
              >
                <CiLogin />
                Login
              </Link>
              <div className="hidden lg:block">
                <Link
                  to="/register"
                  className="py-1 px-1 lg:px-2 border border-indigo-600 rounded-lg text-base lg:text-lg flex items-center gap-1 "
                >
                  <BiUserPlus />
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
