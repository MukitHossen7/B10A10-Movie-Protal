import { useContext, useEffect } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";

import { FiFilm } from "react-icons/fi";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { BiUserPlus } from "react-icons/bi";

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
              {user && (
                <div className="flex flex-col  gap-3">
                  <NavLink to="/addMovie">Add Movies</NavLink>
                  <NavLink to="/myFavorites">My Favorites</NavLink>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 lg:space-x-2">
            <FiFilm className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">MoviePortal</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-gray-700 text-base">
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
          {user ? (
            <div className="flex items-center gap-1 lg:gap-4">
              <div className="tooltip" data-tip={`${user?.displayName}`}>
                <img
                  className="w-8 lg:w-10 h-8 lg:h-10 object-cover rounded-full "
                  src={user?.photoURL}
                ></img>
              </div>
              <button
                onClick={handleLogOut}
                className="py-1 px-1 lg:px-4 border border-indigo-600 rounded-lg text-base lg:text-lg font-medium flex items-center gap-1  "
              >
                <CiLogout />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 lg:gap-4">
              <Link
                to="/login"
                className="py-1 px-1 lg:px-4 border border-indigo-600 rounded-lg text-base lg:text-lg font-medium flex items-center gap-1  "
              >
                <CiLogin />
                Login
              </Link>
              <Link
                to="/register"
                className="py-1 px-1 lg:px-4 border border-indigo-600 rounded-lg text-base lg:text-lg font-medium flex items-center gap-1"
              >
                <BiUserPlus />
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
