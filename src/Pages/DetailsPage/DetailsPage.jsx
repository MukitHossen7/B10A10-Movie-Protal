import { Link } from "react-router-dom";

const DetailsPage = () => {
  return (
    <div className="pb-16 mt-16">
      <div className="p-6 max-w-6xl mx-auto border border-indigo-600   rounded-lg">
        <div className="  flex flex-col sm:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920"
              alt="hello"
              className="w-full rounded-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">title</h1>
            <p className="text-gray-600 mt-2">
              <strong>Genre:</strong> genre
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Duration:</strong> duration minutes
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Release Year:</strong> releaseYear
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Rating:</strong> rate/5
            </p>
            <p className="text-gray-600 mt-4">summary</p>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Delete Movie
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add to Favorite
              </button>
            </div>
          </div>
        </div>

        <Link to="/allMovies">
          <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            See All Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
