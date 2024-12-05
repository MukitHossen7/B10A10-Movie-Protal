import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const DetailsPage = () => {
  const detail = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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
      email: user?.email,
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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
            }
            navigate("/allMovies");
          });
      }
    });
  };
  return (
    <div className="pb-16 mt-16 flex flex-col justify-center items-center">
      <div className="p-6 max-w-6xl mx-auto border border-indigo-600 rounded-lg">
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
              <button
                onClick={() => handleDelete(detail._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete Movie
              </button>
              <button
                onClick={handleFavorite}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add to Favorite
              </button>
              <Link to="/update">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/allMovies">
        <button className="mt-6 text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          See All Movies
        </button>
      </Link>
    </div>
  );
};

export default DetailsPage;
