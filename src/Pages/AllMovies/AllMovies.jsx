import { Link, useLoaderData } from "react-router-dom";

const AllMovies = () => {
  const allMovies = useLoaderData();
  console.log(allMovies);
  return (
    <div className="mt-8 lg:mt-12 pb-16 ">
      {allMovies.length === 0 ? (
        <div className="text-center font-semibold text-4xl">
          No movies data found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMovies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={movie?.poster}
                alt="Movie Poster"
                className="w-full h-64 object-cover"
              ></img>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {movie?.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Genre:</strong> {movie?.genre}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Duration:</strong> {movie?.duration} mins
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Release Year:</strong> {movie?.releaseYear} Year
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Rating:</strong> {movie?.rate}/5 ⭐
                </p>
                <Link to="/details">
                  <button
                    to="/details"
                    className="mt-4 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
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
