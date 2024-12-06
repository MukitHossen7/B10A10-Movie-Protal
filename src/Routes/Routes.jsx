import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AddMovies from "../Pages/AddMovies/AddMovies";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../Pages/Update/Update";
import ErrorPage from "../Pages/Error/ErrorPage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-side-navy.vercel.app/movies"),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://server-side-navy.vercel.app/movies"),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoutes>
            <AddMovies></AddMovies>,
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <MyFavorites></MyFavorites>
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <DetailsPage></DetailsPage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-navy.vercel.app/movies/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-navy.vercel.app/movies/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
