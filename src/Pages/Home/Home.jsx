import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import { useEffect, useState } from "react";

const Home = () => {
  const movieDate = useLoaderData();
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const movies = [...movieDate].sort((a, b) => b.rate - a.rate);
    setAllMovies(movies);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <FeaturedMovies allMovies={allMovies}></FeaturedMovies>
    </div>
  );
};

export default Home;
