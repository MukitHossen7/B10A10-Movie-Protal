import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedMovies = ({ allMovies }) => {
  return (
    <div className="mt-10 lg:mt-14">
      <h3 className="font-semibold text-3xl dark:text-gray-50">
        Featured Movies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-16 mb-14">
        {allMovies.slice(0, 6).map((movie) => (
          <div
            key={movie._id}
            className="bg-white dark:bg-gray-800/50 dark:text-gray-50 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300"
          >
            <img
              src={movie?.poster}
              alt="poster"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie?.title}</h2>
              <div className=" text-sm mb-1 mt-2">
                <strong>Genre:</strong>{" "}
                <ul className="list-disc list-inside ml-4">
                  {movie?.genre.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm mt-1">
                <strong>Duration: </strong>
                {movie?.duration} mins
              </p>
              <p className="text-sm  mt-1">
                <strong>Release Year: </strong>
                {movie?.releaseYear}
              </p>
              <p className="text-sm  mt-1">
                <strong>Rating: </strong>
                {movie?.rate}/5 ⭐{" "}
              </p>
              <Link
                to={`/details/${movie._id}`}
                className="block mt-4 text-center px-4 py-2 text-gray-50 bg-indigo-500 hover:bg-indigo-600 rounded shadow-md font-medium"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/allMovies"
          className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded "
        >
          See all movies
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMovies;
