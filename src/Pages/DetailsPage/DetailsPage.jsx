import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const DetailsPage = () => {
  const detail = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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
    fetch("https://server-side-navy.vercel.app/favorite", {
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
        fetch(`https://server-side-navy.vercel.app/movies/${id}`, {
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
    <div className="pb-16 pt-16 flex flex-col justify-center items-center">
      <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-gray-800/50 dark:text-gray-50 bg-opacity-80 shadow-md rounded-lg">
        <div className="  flex flex-col sm:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src={detail.poster}
              alt="hello"
              className="w-full h-[300px] lg:h-[400px] rounded-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">{detail.title}</h1>
            <div className="mt-2 text-sm mb-1 ">
              <strong>Genre :</strong>{" "}
              <ul className="list-disc list-inside ml-4">
                {detail?.genre.map((item, idx) => (
                  <li key={idx}>{item} </li>
                ))}
              </ul>
            </div>
            <p className="mt-2">
              <strong>Duration :</strong> {detail.duration} minutes
            </p>
            <p className="mt-2">
              <strong>Release Year :</strong> {detail.releaseYear} Year
            </p>
            <p className=" mt-2">
              <strong>Rating :</strong> {detail.rate}/5⭐
            </p>
            <p className=" mt-4">{detail.summary}</p>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-5">
              <button
                onClick={() => handleDelete(detail._id)}
                className="border border-indigo-600 px-3 text-red-500 py-2 rounded flex items-center gap-1"
              >
                <MdDeleteForever className="text-xl" />
                Delete
              </button>
              <button onClick={handleFavorite} className=" ">
                <FaRegHeart className="text-2xl text-pink-500" />
              </button>
              <Link to={`/update/${detail._id}`}>
                <button className="border border-indigo-600 text-indigo-600  px-4 py-2 rounded flex items-center gap-1">
                  <MdOutlineSystemUpdateAlt className="text-xl" />
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/allMovies">
        <button className="mt-10 text-center font-semibold bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">
          See All Movies
        </button>
      </Link>
    </div>
  );
};

export default DetailsPage;
