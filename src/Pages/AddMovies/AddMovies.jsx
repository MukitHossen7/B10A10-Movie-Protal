import { useState } from "react";
import toast from "react-hot-toast";

import { Rating } from "react-simple-star-rating";

const AddMovies = () => {
  const [rating, setRating] = useState(0);
  // const [formData, setFormData] = useState({
  //   poster: "",
  //   title: "",
  //   genre: "",
  //   duration: "",
  //   releaseYear: "",
  //   rating: 0,
  //   summary: "",
  //   email: "user@example.com", // Replace with actual user email from auth
  // });

  const genres = ["Comedy", "Drama", "Horror", "Action"];
  const years = [2024, 2023, 2022, 2021, 2020];

  const handleRating = (rate) => {
    setRating(rate);
  };
  // const validateForm = () => {
  //   if (!formData.poster || !formData.poster.startsWith("http")) {
  //     toast.error("Movie poster must be a valid URL.");
  //     return false;
  //   }
  //   if (!formData.title || formData.title.length < 2) {
  //     toast.error("Movie title must have at least 2 characters.");
  //     return false;
  //   }
  //   if (!formData.genre) {
  //     toast.error("Please select a genre.");
  //     return false;
  //   }
  //   if (!formData.duration || formData.duration <= 60) {
  //     toast.error("Duration must be greater than 60 minutes.");
  //     return false;
  //   }
  //   if (!formData.releaseYear) {
  //     toast.error("Please select a release year.");
  //     return false;
  //   }
  //   if (!formData.rating) {
  //     toast.error("Please select a rating.");
  //     return false;
  //   }
  //   if (!formData.summary || formData.summary.length < 10) {
  //     toast.error("Summary must have at least 10 characters.");
  //     return false;
  //   }
  //   return true;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const poster = e.target.poster.value;
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const duration = parseInt(e.target.duration.value);
    const releaseYear = parseInt(e.target.releaseYear.value);
    const rate = rating;
    const summary = e.target.summary.value;
    console.log(poster, title, genre, duration, releaseYear, rate, summary);

    // if (!validateForm()) return;

    // try {
    //   toast.success("Movie added successfully!");
    //   setFormData({
    //     poster: "",
    //     title: "",
    //     genre: "",
    //     duration: "",
    //     releaseYear: "",
    //     rating: 0,
    //     summary: "",
    //     email: "user@example.com",
    //   });
    // } catch (error) {
    //   toast.error("Failed to add movie. Please try again.", error);
    // }
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add a New Movie</h1>
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
            <select name="genre" className="w-full border rounded p-2">
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
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

          <div className="flex">
            <label className="block mb-2 font-medium">Rating:</label>
            <div className="flex flex-row items-center space-x-2">
              <Rating onClick={handleRating} initialValue={rating} />
            </div>
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
