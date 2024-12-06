import { Link, useLoaderData } from "react-router-dom";
import Search from "../../components/Search/Search";
import { useState } from "react";

const AllMovies = () => {
  const allMoviesData = useLoaderData();
  const [allMovies, setAllMovies] = useState(allMoviesData);
  return (
    <div className="pt-8 lg:pt-12 pb-16 ">
      <div>
        <Search setAllMovies={setAllMovies}></Search>
      </div>
      {allMovies.length === 0 ? (
        <div className="text-center font-semibold dark:text-gray-50 text-4xl">
          No movies data found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allMovies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white dark:bg-gray-800/50 dark:text-gray-50 shadow-md rounded-lg  hover:shadow-lg overflow-hidden transition transform hover:scale-105 duration-300"
            >
              <img
                src={movie?.poster}
                alt="Movie Poster"
                className="w-full h-64 object-cover"
              ></img>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie?.title}</h2>
                <div className=" text-sm mb-1">
                  <strong>Genre :</strong>{" "}
                  <ul className="list-disc list-inside ml-4">
                    {movie?.genre.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className=" text-sm mb-1">
                  <strong>Duration :</strong> {movie?.duration} mins
                </p>
                <p className=" text-sm mb-1">
                  <strong>Release Year :</strong> {movie?.releaseYear} Year
                </p>
                <p className=" text-sm mb-1">
                  <strong>Rating :</strong> {movie?.rate}/5 ⭐
                </p>
                <Link to={`/details/${movie._id}`}>
                  <button
                    to="/details"
                    className="mt-4 w-full bg-indigo-600 text-gray-50 font-medium py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovies;
