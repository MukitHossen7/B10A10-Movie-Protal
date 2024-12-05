import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Select from "react-select";

const AddMovies = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [genre, setGenre] = useState([]);
  const genres = [
    {
      value: "Comedy",
      label: "Comedy",
    },
    {
      value: "Horror",
      label: "Horror",
    },
    {
      value: "Action",
      label: "Action",
    },
    {
      value: "Romantic",
      label: "Romantic",
    },
  ];
  const years = [2024, 2023, 2022, 2021, 2020];
  const handleGenre = (e) => {
    if (e) {
      const generaArray = e.map((options) => options.value);
      setGenre(generaArray);
    } else {
      console.log("no genera");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const poster = e.target.poster.value;
    const title = e.target.title.value;
    const duration = parseInt(e.target.duration.value);
    const releaseYear = parseInt(e.target.releaseYear.value);
    const rate = parseInt(e.target.rating.value);
    const summary = e.target.summary.value;

    if (!poster.startsWith("http")) {
      toast.error("Movie poster must be a valid URL.");
      return false;
    }
    if (title.length < 2) {
      toast.error("Movie title must have at least 2 characters.");
      return false;
    }
    if (genre.length <= 0) {
      toast.error("Please select genre.");
      return false;
    }
    if (!(duration > 60)) {
      toast.error("Duration must be greater than 60 minutes.");
      return false;
    }
    if (!releaseYear) {
      toast.error("Please select a release year.");
      return false;
    }
    if (!rate || rate < 0) {
      toast.error("Please select a rating.");
      return false;
    }
    if (!(summary.length > 10)) {
      toast.error("Summary must have at least 10 characters.");
      return false;
    }

    const moviesData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rate,
      summary,
      email,
    };
    console.log(moviesData);
    console.log(genre);
    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(moviesData),
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        if (data.insertedId) {
          Swal.fire("Successfully added new movie");
        }
        console.log(data);
      });
  };
  return (
    <div className="pb-16 mt-16">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Add a New Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Movie Poster (URL):
            </label>
            <input
              type="text"
              name="poster"
              className="w-full border rounded p-2"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Movie Title:</label>
            <input
              type="text"
              name="title"
              className="w-full border rounded p-2"
              placeholder="Enter movie title"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Genre:</label>
            <Select
              isMulti
              name="genre"
              onChange={handleGenre}
              options={genres}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Duration (minutes):
            </label>
            <input
              type="number"
              name="duration"
              className="w-full border rounded p-2"
              placeholder="Enter duration in minutes"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Release Year:</label>
            <select name="releaseYear" className="w-full border rounded p-2">
              <option value="">Select a year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <label className="block mb-2 font-medium">Rating:</label>
            <input
              type="number"
              name="rating"
              max="5"
              className="w-full border rounded p-2"
              placeholder="giver rating"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Summary:</label>
            <textarea
              name="summary"
              className="w-full border rounded p-2"
              placeholder="Enter a short summary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
