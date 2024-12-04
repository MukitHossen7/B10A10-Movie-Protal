import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AddMovies from "../Pages/AddMovies/AddMovies";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

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
        loader: () => fetch("http://localhost:5000/movies"),
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
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`),
      },
    ],
  },
]);

export default router;
