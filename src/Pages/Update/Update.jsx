import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
const Update = () => {
  const updateData = useLoaderData();
  const years = [2024, 2023, 2022, 2021, 2020];
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
  const handleGenre = (e) => {
    if (e) {
      const generaArray = e.map((options) => options.value);
      setGenre(generaArray);
    } else {
      console.log("no genera");
    }
  };
  const handleUpdate = (e) => {
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
    };
    fetch(`https://server-side-navy.vercel.app/movies/${updateData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(moviesData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully updated",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="pb-16 pt-16">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800/50 dark:text-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Update Movie</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Movie Poster (URL):
            </label>
            <input
              type="text"
              name="poster"
              defaultValue={updateData.poster}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Movie Title:</label>
            <input
              type="text"
              name="title"
              defaultValue={updateData.title}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
              placeholder="Enter movie title"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-medium">Genre:</label>
              <div className="dark:bg-gray-700">
                <Select
                  isMulti
                  name="genre"
                  onChange={handleGenre}
                  options={genres}
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-medium">
                Duration (minutes):
              </label>
              <input
                type="number"
                defaultValue={updateData.duration}
                name="duration"
                className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
                placeholder="Enter duration in minutes"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-medium">Release Year:</label>
              <select
                name="releaseYear"
                className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full lg:w-1/2">
              <label className="block mb-2 font-medium">Rating:</label>
              <input
                type="number"
                name="rating"
                defaultValue={updateData.rate}
                max="5"
                className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
                placeholder="giver rating"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Summary:</label>
            <textarea
              name="summary"
              defaultValue={updateData.summary}
              className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
              placeholder="Enter a short summary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 font-semibold text-white p-2 rounded hover:bg-indigo-600"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
