import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-navy.vercel.app/favorite?userEmail=${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [email]);
  const handleFavoriteDelete = (id) => {
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
        fetch(`https://server-side-navy.vercel.app/favorite/${id}`, {
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
              setFavorites(favorites.filter((favorite) => favorite._id !== id));
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="pt-8 lg:pt-12 pb-16 ">
        {favorites.length === 0 ? (
          <div className="text-center font-semibold dark:text-gray-50 text-4xl">
            No favorite data found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((favorite) => (
              <div
                key={favorite._id}
                className="bg-white dark:bg-gray-800/50 dark:text-gray-50 shadow-md rounded-lg  hover:shadow-lg  overflow-hidden transition transform hover:scale-105 duration-300"
              >
                <img
                  src={favorite?.poster}
                  alt="Movie Poster"
                  className="w-full h-64 object-cover"
                ></img>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 ">
                    {favorite?.title}
                  </h2>
                  <div className=" mt-2 text-sm mb-1 ">
                    <strong>Genre:</strong>{" "}
                    <ul className="list-disc list-inside ml-4">
                      {favorite?.genre.map((item, idx) => (
                        <li key={idx}>{item} </li>
                      ))}
                    </ul>
                  </div>
                  <p className=" text-sm mb-1">
                    <strong>Duration:</strong> {favorite?.duration} mins
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Release Year:</strong> {favorite?.releaseYear} Year
                  </p>
                  <p className=" text-sm mb-1">
                    <strong>Rating:</strong> {favorite?.rate}/5 ⭐
                  </p>
                  <button
                    onClick={() => handleFavoriteDelete(favorite._id)}
                    className="mt-4 w-full bg-red-600 text-gray-50 font-medium py-2 px-4 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete Favorite
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
