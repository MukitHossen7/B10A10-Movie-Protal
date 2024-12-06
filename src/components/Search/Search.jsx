/* eslint-disable react/prop-types */
const Search = ({ setAllMovies }) => {
  const handleChange = (e) => {
    const title = e.target.value;
    fetch(`https://server-side-navy.vercel.app/movies?searchParams=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setAllMovies(data);
      });
  };
  return (
    <div className="flex flex-col justify-center dark:text-gray-50 items-center gap-4 mb-10">
      <h2 className="font-semibold text-2xl lg:text-3xl">
        Search on Movie Title
      </h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="search.."
        className="input input-bordered w-full max-w-xs dark:bg-gray-700 dark:text-white border-gray-300 border"
      />
    </div>
  );
};

export default Search;
