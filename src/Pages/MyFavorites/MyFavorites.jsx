import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/favorite?userEmail=${email}`, {
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
        fetch(`http://localhost:5000/favorite/${id}`, {
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
      <div className="mt-8 lg:mt-12 pb-16 ">
        {favorites.length === 0 ? (
          <div className="text-center font-semibold text-4xl">
            No favorite data found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <div
                key={favorite._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={favorite?.poster}
                  alt="Movie Poster"
                  className="w-full h-64 object-cover"
                ></img>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {favorite?.title}
                  </h2>
                  <div className="text-gray-600 mt-2 text-sm mb-1 ">
                    <strong>Genre:</strong>{" "}
                    <ul className="list-disc list-inside ml-4">
                      {favorite?.genre.map((item, idx) => (
                        <li key={idx}>{item} </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Duration:</strong> {favorite?.duration} mins
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Release Year:</strong> {favorite?.releaseYear} Year
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Rating:</strong> {favorite?.rate}/5 ⭐
                  </p>
                  <button
                    onClick={() => handleFavoriteDelete(favorite._id)}
                    className="mt-4 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
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
