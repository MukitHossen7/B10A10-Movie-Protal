import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const detail = useLoaderData();
  console.log(detail);
  const handleFavorite = () => {
    toast.success("Added to your favorites list");
    const favorite = {
      title: detail.title,
      poster: detail.poster,
      genre: detail.genre,
      duration: detail.duration,
      releaseYear: detail.releaseYear,
      rate: detail.rate,
      summary: detail.summary,
      email: detail.email,
      isFavorite: true,
    };
    fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favorite),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="pb-16 mt-16">
      <div className="p-6 max-w-6xl mx-auto border border-indigo-600   rounded-lg">
        <div className="  flex flex-col sm:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src={detail.poster}
              alt="hello"
              className="w-full rounded-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{detail.title}</h1>
            <p className="text-gray-600 mt-2">
              <strong>Genre:</strong> {detail.genre}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Duration:</strong> {detail.duration} minutes
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Release Year:</strong> {detail.releaseYear} Year
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Rating:</strong> {detail.rate}/5
            </p>
            <p className="text-gray-600 mt-4">{detail.summary}</p>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Delete Movie
              </button>
              <button
                onClick={handleFavorite}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
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
