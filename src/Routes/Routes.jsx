import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AddMovies from "../Pages/AddMovies/AddMovies";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/addMovie",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myFavorites",
        element: <MyFavorites></MyFavorites>,
      },
    ],
  },
]);

export default router;
